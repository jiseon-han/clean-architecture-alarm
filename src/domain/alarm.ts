type UniqueId = number;

export type Alarm = {
  id: UniqueId;
  isOn: boolean;
};

// 알람 리스트 중 해당 알람의 상태를 변경해주는 함수
export function updateAlarm(alarm: Alarm, list: Alarm[]) {
  return list.map((a) => (a.id === alarm.id ? { id: a.id, isOn: !a.isOn } : a));
}

export function createAlarm() {
  return {
    id: Date.now(),
    isOn: true,
  };
}
