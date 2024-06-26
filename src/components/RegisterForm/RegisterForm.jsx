import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <h2 className={css.title}>Register</h2>
          <div className={css.inputs}>
            <label className={css.label}>
              Username
              <input
                type="text"
                name="name"
                placeholder="Choose Username"
                required
              />
            </label>
            <label className={css.label}>
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <label className={css.label}>
              Password
              <input
                type="password"
                name="password"
                placeholder="Create password"
                required
              />
            </label>
          </div>
          <button className={css.button} type="submit">
            Register
          </button>
          <hr />
          <p className={css.link}>
            Clicking <strong>create account</strong> means that you are agree to
            our <a href="!#">terms of services</a>.
          </p>
        </form>
      </div>
    </div>
  );
};
