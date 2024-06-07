import { Grid } from 'react-loader-spinner';
// import css from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="rgba(162, 255, 246, 1)"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loader;
