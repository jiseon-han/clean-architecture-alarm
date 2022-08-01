import { RouterService } from '../application/ports';
import { useNavigate } from 'react-router-dom';

export function useRouter(): RouterService {
  const navigate = useNavigate();
  return {
    navigate: navigate,
  };
}
