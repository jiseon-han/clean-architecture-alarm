import { useSetAlarm } from '../../application/setAlarm';
import { Alarm } from '../../domain/alarm';

export default function AlarmToggle({ alarm }: { alarm: Alarm }) {
  const { editAlarm } = useSetAlarm();

  const handleClick = () => {
    editAlarm(alarm);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleClick} checked={alarm?.isOn} />
      <span className="slider round"></span>
    </label>
  );
}
