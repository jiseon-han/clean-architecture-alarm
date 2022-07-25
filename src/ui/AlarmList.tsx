import { useAlarmStorage } from '../services/storageAdapter';
import CreateAlarm from './components/CreateAlarmBtn';
import AlarmToggle from './components/AlarmToggle';
import DeleteAlarm from './components/DeleteAlarmBtn';

const AlarmList = () => {
  const { alarms } = useAlarmStorage();
  return (
    <div>
      <h3>AlarmList</h3>
      <CreateAlarm />
      <br />
      {alarms.map((alarm, index) => (
        <div key={index} className="alarm-wrapper">
          {alarm.id} <AlarmToggle alarm={alarm} /> <DeleteAlarm alarm={alarm} />
        </div>
      ))}
    </div>
  );
};

export default AlarmList;
