import { User } from '../domain/user';
import { Alarm, createAlarm } from '../domain/alarm';
import { getAlarmsApi } from '../services/api';
import { useNotifier } from '../services/notificationAdapter';
import { useAlarmStorage } from '../services/storageAdapter';
import { NotificationService, AlarmStorageService } from './ports';

export function useSetAlarm() {
  const notifier: NotificationService = useNotifier();
  const alarmStorage: AlarmStorageService = useAlarmStorage();

  function editAlarm(alarm: Alarm): void {
    const futureStatus = alarm.isOn ? '해제' : '설정';
    try {
      alarmStorage.editAlarm(alarm);
      notifier.notify(`알람이 ${futureStatus}되었습니다.`);
    } catch (e) {
      console.log(e);
      notifier.notify('알람 설정중 문제가 발생했습니다.');
    }
  }

  function addAlarm(): Alarm | undefined {
    try {
      const alarm = createAlarm();
      alarmStorage.addAlarm(alarm);
      notifier.notify(`알람이 생성되었습니다.`);
      return alarm;
    } catch (e) {
      console.log(e);
      notifier.notify('알람 생성 중 문제가 발생했습니다.');
    }
  }

  function removeAlarm(alarm: Alarm): void {
    try {
      alarmStorage.removeAlarm(alarm);
      notifier.notify(`[${alarm.id}] 알람이 삭제되었습니다.`);
    } catch (e) {
      console.log(e);
      notifier.notify(`[${alarm.id}] 알람을 삭제하는데 문제가 발생했습니다.`);
    }
  }

  async function initAlarms(user?: User) {
    try {
      if (user) {
        const alarms = await getAlarmsApi(user);
        alarmStorage.initAlarms(alarms);
      } else {
        alarmStorage.initAlarms([]);
      }
    } catch (e) {
      console.log(e);
      notifier.notify('알람을 불러오는 중 문제가 발생했습니다.');
    }
  }

  return { addAlarm, editAlarm, removeAlarm, initAlarms };
}
