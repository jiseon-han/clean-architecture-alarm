import { Alarm, createAlarm } from '../domain/alarm';
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

  return { addAlarm, editAlarm };
}
