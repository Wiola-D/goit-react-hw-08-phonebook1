import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
// import css from '../styles/Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div>
        <p>{contact.name}: </p>
        <p>{contact.number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
export default Contact;
