import css from './HomePage.module.css';

import { useAuth } from 'hooks';

const Home = () => {
  const { user } = useAuth();
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome {user.name}! </h1>
      <p className={css.content}>
        The best user firendly online based phonebook
      </p>
    </div>
  );
};

export default Home;
