// import css from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handleSearch}
        placeholder="Find Contact by name"
      />
    </div>
  );
};
