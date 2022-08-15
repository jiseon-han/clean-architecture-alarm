import { useAlarmStorage, useUserStorage } from '../services/storageAdapter';
import CreateAlarm from './components/CreateAlarmBtn';
import AlarmToggle from './components/AlarmToggle';
import DeleteAlarm from './components/DeleteAlarmBtn';
import { useEffect } from 'react';
import { useSetAlarm } from '../application/setAlarm';

import { useRouter } from '../services/routerAdapter';
import Info from './components/Info';

const AlarmList = () => {
  const { user } = useUserStorage();
  const { alarms } = useAlarmStorage();
  const { initAlarms } = useSetAlarm();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.navigate('/login');
    initAlarms(user);
  }, []);

  const disabled = !user?.hasProduct;

  return (
    <div>
      <h3>AlarmList</h3>
      {disabled && <Info text="구매한 유저만 알람 변경이 가능합니다." />}
      <CreateAlarm disabled={disabled} />
      <br />
      {alarms.map((alarm, index) => (
        <div key={index} className="alarm-wrapper">
          {alarm.id} <AlarmToggle alarm={alarm} disabled={disabled} /> <DeleteAlarm alarm={alarm} disabled={disabled} />
        </div>
      ))}
    </div>
  );
};

export default AlarmList;
