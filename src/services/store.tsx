import React, { useState } from 'react';
import { useContext } from 'react';
import { Alarm, updateAlarm } from '../domain/alarm';
import { AlarmStorageService } from '../application/ports';

const StoreContext = React.createContext({} as AlarmStorageService);
export const useStore = () => useContext(StoreContext);

export function Provider({ children }: { children: React.ReactNode }) {
  const [alarms, setAlarms] = useState<Alarm[]>([]);

  const value = {
    alarms,
    editAlarm: (a: Alarm) => setAlarms(updateAlarm(a, alarms)),
    addAlarm: (a: Alarm) => setAlarms([...alarms, a]),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
