import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

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
        <form
          className={css.container}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h2 className={css.title}>Log In</h2>
          <div className={css.inputs}>
            <label className={css.label}>
              Email
              <input type="email" name="email" />
            </label>
            <label className={css.label}>
              Password
              <input type="password" name="password" />
            </label>
          </div>
          <button className={css.button} type="submit">
            Log In
          </button>
          <hr />
          <p className={css.link}>
            <a href="!#">Forgotten account</a>
          </p>
        </form>
      </div>
    </div>
  );
};
