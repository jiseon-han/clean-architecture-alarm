import { useSetAlarm } from '../../application/setAlarm';
import { Alarm } from '../../domain/alarm';

export default function DeleteAlarm({ alarm, disabled }: { alarm: Alarm; disabled: boolean }) {
  const { removeAlarm } = useSetAlarm();

  const handleClick = () => removeAlarm(alarm);

  return (
    <button onClick={handleClick} disabled={disabled}>
      알람 삭제
    </button>
  );
}
