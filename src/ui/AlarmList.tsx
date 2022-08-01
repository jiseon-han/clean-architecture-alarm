import { useAlarmStorage, useUserStorage } from '../services/storageAdapter';
import CreateAlarm from './components/CreateAlarmBtn';
import AlarmToggle from './components/AlarmToggle';
import DeleteAlarm from './components/DeleteAlarmBtn';
import { useEffect } from 'react';
import { useSetAlarm } from '../application/setAlarm';

import { useRouter } from '../services/routerAdapter';

const AlarmList = () => {
  const { user } = useUserStorage();
  const { alarms } = useAlarmStorage();
  const { initAlarms } = useSetAlarm();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.navigate('/login');
    initAlarms(user);
  }, []);

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
