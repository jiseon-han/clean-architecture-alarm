type UniqueId = string;

export type Alarm = {
  id?: UniqueId;
  isOn: boolean;
};

export function createAlarm() {
  return {
    id: Date.now(),
    isOn: true,
  };
}
