import { useAuth } from '../services/authAdapter';
import { useRouter } from '../services/routerAdapter';
import { useUserStorage } from '../services/storageAdapter';
import { UserStorageService, AuthenticationService, RouterService } from './ports';

export function useLogin() {
  const userStorage: UserStorageService = useUserStorage();
  const auth: AuthenticationService = useAuth();
  const router: RouterService = useRouter();

  async function login(id: string, password: string) {
    //로그인 인증 후 알람 리스트로 이동한다.
    const user = await auth.auth(id, password);
    userStorage.updateUser(user);

    router.navigate('/alarms');
  }

  return {
    user: userStorage.user,
    login,
  };
}
