import { Alarm } from '../domain/alarm';

export interface NotificationService {
  notify(message: string): void;
}

export interface AlarmStorageService {
  alarm: Alarm;
  updateAlarm(alarm: Alarm): void;
}
