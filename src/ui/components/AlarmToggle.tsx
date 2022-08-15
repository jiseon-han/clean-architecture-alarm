import { useSetAlarm } from '../../application/setAlarm';
import { Alarm } from '../../domain/alarm';

export default function AlarmToggle({ alarm, disabled }: { alarm: Alarm; disabled: boolean }) {
  const { editAlarm } = useSetAlarm();

  const handleClick = () => {
    editAlarm(alarm);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleClick} checked={alarm?.isOn} disabled={disabled} />
      <span className="slider round"></span>
    </label>
  );
}
