import { UserNavigation } from 'components/UserNavigation/UserNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HomeNavigation } from 'components/HomeNavigation/HomeNavigation';
import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <UserNavigation />
      {isLoggedIn ? <UserMenu /> : <HomeNavigation />}
    </header>
  );
};
