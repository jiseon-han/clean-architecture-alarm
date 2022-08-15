import { Alarm } from '../domain/alarm';
import { User } from '../domain/user';

const alarm1: Alarm[] = new Array(10).fill(0).map((v, idx) => ({ id: idx, isOn: false }));

const alarm2: Alarm[] = new Array(10).fill(0).map((v, idx) => ({ id: idx + 100, isOn: false }));

const alarm3: Alarm[] = new Array(10).fill(0).map((v, idx) => ({ id: idx + 200, isOn: false }));

export const returnAlarmsOfUser = (user: User) => {
  switch (true) {
    case user.id.includes('1'):
      return alarm1;
    case user.id.includes('2'):
      return alarm2;
    default:
      return alarm3;
  }
};
