import { useLogin } from '../application/login';

const Login = () => {
  const { login } = useLogin();

  function handleSubmit(e: any) {
    e.preventDefault();

    const { id, password } = e.target;
    login(id.value, password.value);
  }

  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="id" />
        <br />
        <input name="password" type="password" placeholder="password" />
        <br />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default Login;
