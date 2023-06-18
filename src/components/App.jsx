import { ToastContainer } from 'react-toastify';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { P } from './ContactList/ContactList.styled';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Loader, SectionContainer } from './App.styled';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { CircleLoader } from 'react-spinners';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SectionContainer>
      <ToastContainer autoClose={3000} draggable={false} />
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && !error ? (
          <Loader>
            <CircleLoader
              color="blue"
              size={100}
              loading={isLoading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Loader>
        ) : contacts.length <= 0 ? (
          <P>No contacts in Phonebook</P>
        ) : (
          <Container>
            <Filter />
            <ContactList />
          </Container>
        )}
      </Section>
    </SectionContainer>
  );
};
