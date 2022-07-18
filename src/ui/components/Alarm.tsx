import { useSetAlarm } from '../../application/setAlarm';
import { Alarm } from '../../domain/alarm';

export default function AlarmToggle({ alarm }: { alarm: Alarm }) {
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
