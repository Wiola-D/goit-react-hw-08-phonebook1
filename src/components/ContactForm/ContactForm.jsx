import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
// import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form[0].value;
    const number = form[1].value;
    const newContact = { name, number };
    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Contact</h3>
      <input
        type="text"
        // className={css.input}
        name="name"
        id="nameInput"
        pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        placeholder="Enter the name"
      />
      <input
        type="text"
        name="number"
        // className={css.input}
        id="numberInput"
        pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
        title="Phone number must start with +"
        required
        placeholder="Enter the number"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
