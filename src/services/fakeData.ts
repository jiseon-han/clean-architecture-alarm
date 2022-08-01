import { Alarm } from '../domain/alarm';

export const alarms: Alarm[] = new Array(10).fill(0).map((v, idx) => ({ id: idx, isOn: false }));
