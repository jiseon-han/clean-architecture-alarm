import { useSetAlarm } from '../../application/setAlarm';

export default function CreateAlarm() {
  const { addAlarm } = useSetAlarm();

  const handleClick = () => addAlarm();

  return <button onClick={handleClick}>알람 추가</button>;
}
