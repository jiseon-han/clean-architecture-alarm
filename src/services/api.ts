import { User } from '../domain/user';
import { alarms } from './fakeData';

export function fakeApi<TResponse>(response: TResponse): Promise<TResponse> {
  return new Promise((res) => setTimeout(() => res(response), 450));
}

export async function getAlarmsApi(user: User) {
  //fake call
  await sleep(1000);
  return alarms;
}

export function sleep(timeout: number) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
