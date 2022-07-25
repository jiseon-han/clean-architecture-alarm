type UniqueId = number;

export type Alarm = {
  id: UniqueId;
  isOn: boolean;
};

export function updateAlarm(alarm: Alarm, list: Alarm[]) {
  return list.map((a) => (a.id === alarm.id ? { id: a.id, isOn: !a.isOn } : a));
}

export function createAlarm() {
  return {
    id: Date.now(),
    isOn: true,
  };
}

export function deleteAlarm(alarm: Alarm, list: Alarm[]) {
  return list.filter((a) => a.id !== alarm.id);
}
