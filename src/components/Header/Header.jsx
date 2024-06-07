import { UserNavigation } from 'components/UserNavigation/UserNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HomeNavigation } from 'components/HomeNavigation/HomeNavigation';
import { useAuth } from 'hooks';
import css from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <UserNavigation />
      {isLoggedIn ? <UserMenu /> : <HomeNavigation />}
    </header>
  );
};
