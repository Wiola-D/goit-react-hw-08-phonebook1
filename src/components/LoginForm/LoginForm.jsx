import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
// import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h2>Log In</h2>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
          <p>
            <a href="!#">Forgotten account</a>
          </p>
          <hr />
        </form>
      </div>
    </div>
  );
};
