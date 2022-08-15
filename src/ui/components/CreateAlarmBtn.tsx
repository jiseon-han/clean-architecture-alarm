import { useSetAlarm } from '../../application/setAlarm';

export default function CreateAlarm({ disabled }: { disabled: boolean }) {
  const { addAlarm } = useSetAlarm();

  const handleClick = () => addAlarm();

  return (
    <button onClick={handleClick} disabled={disabled}>
      알람 추가
    </button>
  );
}
