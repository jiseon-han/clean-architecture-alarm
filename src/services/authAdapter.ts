import { AuthenticationService } from '../application/ports';
import { fakeApi } from './api';

export function useAuth(): AuthenticationService {
  return {
    auth: (id: string, password: string) => fakeApi({ id, password }),
  };
}
