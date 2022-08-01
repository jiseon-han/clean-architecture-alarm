import React, { useState } from 'react';
import { useContext } from 'react';
import { Alarm, updateAlarm, deleteAlarm } from '../domain/alarm';
import { User } from '../domain/user';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export function Provider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [alarms, setAlarms] = useState<Alarm[]>([]);

  const value = {
    user,
    alarms,
    updateUser: setUser,
    initAlarms: (alarms: Alarm[]) => setAlarms(alarms),
    editAlarm: (a: Alarm) => setAlarms(updateAlarm(a, alarms)),
    addAlarm: (a: Alarm) => setAlarms([...alarms, a]),
    removeAlarm: (a: Alarm) => setAlarms(deleteAlarm(a, alarms)),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
