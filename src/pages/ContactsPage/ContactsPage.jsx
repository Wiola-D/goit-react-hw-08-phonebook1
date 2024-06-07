import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { ContactsList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div className={css.container}>
        <Helmet>
          <title>Your Contacts</title>
        </Helmet>
        <div>{isLoading && <Loader />}</div>
        <ContactForm />
        <div className={css.contactsList}>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
