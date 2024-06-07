// import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectfilteredContacts } from '../../redux/contacts/selectors';
import Contact from 'components/Contact/Contact';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
};
