import React, { useState } from 'react';
import { useContext } from 'react';
import { Alarm } from '../domain/alarm';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export function Provider({ children }: { children: React.ReactNode }) {
  const [alarms, setAlarms] = useState<Alarm[]>([]);

  const value = {
    alarms,
    updateAlarm: (a: Alarm) => setAlarms(replaceAlarm(a, alarms)),
    addAlarm: (a: Alarm) => setAlarms([...alarms, a]),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

function replaceAlarm(alarm: Alarm, list: Alarm[]) {
  return list.map((a) => (a.id === alarm.id ? { id: a.id, isOn: !a.isOn } : a));
}
