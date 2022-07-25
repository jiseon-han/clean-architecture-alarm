import { useSetAlarm } from '../../application/setAlarm';
import { Alarm } from '../../domain/alarm';

export default function DeleteAlarm({ alarm }: { alarm: Alarm }) {
  const { removeAlarm } = useSetAlarm();

  const handleClick = () => removeAlarm(alarm);

  return <button onClick={handleClick}>알람 삭제</button>;
}
