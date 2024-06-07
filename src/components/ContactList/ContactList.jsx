import { useSelector } from 'react-redux';
import { selectfilteredContacts } from '../../redux/contacts/selectors';
import Contact from 'components/Contact/Contact';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noContacts}>No contacts</p>
      )}
    </div>
  );
};
