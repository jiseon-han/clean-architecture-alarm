import { Alarm } from '../domain/alarm';

export interface NotificationService {
  notify(message: string): void;
}

export interface AlarmStorageService {
  alarms: Alarm[];
  addAlarm(alarm: Alarm): void;
  updateAlarm(alarm: Alarm): void;
}
