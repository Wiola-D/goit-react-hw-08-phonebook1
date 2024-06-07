import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import css from './UserNavigation.module.css';

export const UserNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
