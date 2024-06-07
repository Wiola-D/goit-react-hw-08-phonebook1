// import css from './Home.module.css';

import { useAuth } from 'hooks';

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Welcome {user.name}! </h1>
      <p>The best user firendly online based phonebook</p>
    </div>
  );
};

export default Home;
