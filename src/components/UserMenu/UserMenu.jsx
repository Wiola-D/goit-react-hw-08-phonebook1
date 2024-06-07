import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <p>Welcome, {user.email}!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
