import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { ContactsList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
// import css from './ContacsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Your Contacts</title>
        </Helmet>
        <div>{isLoading && <Loader />}</div>
        <ContactForm />
        <Filter />
        <ContactsList />
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
