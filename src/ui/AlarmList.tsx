import React from 'react';
import { useAlarmStorage } from '../services/storageAdapter';
import CreateAlarm from './components/CreateAlarm';
import AlarmToggle from './components/Alarm';

const AlarmList = () => {
  const { alarms } = useAlarmStorage();
  return (
    <div>
      <h3>AlarmList</h3>
      <CreateAlarm />
      <br />
      {alarms.map((alarm, index) => (
        <div key={index} className="alarm-wrapper">
          {alarm.id} <AlarmToggle alarm={alarm} />
        </div>
      ))}
    </div>
  );
};

export default AlarmList;
