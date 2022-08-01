import { Alarm } from '../domain/alarm';
import { User } from '../domain/user';

export interface NotificationService {
  notify(message: string): void;
}

export interface AlarmStorageService {
  alarms: Alarm[];
  initAlarms(alarms: Alarm[]): void;
  addAlarm(alarm: Alarm): void;
  editAlarm(alarm: Alarm): void;
  removeAlarm(alarm: Alarm): void;
}

export interface UserStorageService {
  user: User;
  updateUser(user: User): void;
}

export interface AuthenticationService {
  auth(id: string, password: string): Promise<User>;
}

export interface RouterService {
  navigate(path: string): void;
}
