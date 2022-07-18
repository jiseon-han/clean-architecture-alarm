import { Alarm } from '../domain/alarm';
import { useNotifier } from '../services/notificationAdapter';
import { useAlarmStorage } from '../services/storageAdapter';
import { NotificationService, AlarmStorageService } from './ports';

export function useSetAlarm() {
  const notifier: NotificationService = useNotifier();
  const alarmStorage: AlarmStorageService = useAlarmStorage();

  function updateAlarm(alarm: Alarm): void {
    try {
      console.log(alarm, alarmStorage, alarmStorage.alarm);
      alarmStorage.updateAlarm(alarm);
      notifier.notify('알람이 설정되었습니다.');
    } catch (e) {
      console.log(e);
      notifier.notify('알람 설정중 문제가 발생했습니다.');
    }
  }

  return { updateAlarm };
}
