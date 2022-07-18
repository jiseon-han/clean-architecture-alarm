import { useSetAlarm } from '../../application/setAlarm';
import { useAlarmStorage } from '../../services/storageAdapter';

export default function Alarm() {
  const { alarm } = useAlarmStorage();
  const { updateAlarm } = useSetAlarm();

  const handleClick = () => {
    updateAlarm(alarm);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleClick} checked={alarm?.isOn} />
      <span className="slider round"></span>
    </label>
  );
}
