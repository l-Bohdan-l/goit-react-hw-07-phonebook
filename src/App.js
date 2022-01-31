import './App.scss';
import React from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactsList } from './components/ContactList/ContactList';
import { Container } from './components/Container/Container';
import { Filter } from './components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   addContact,
//   deleteContact,
//   filterContact,
// } from './redux/contacts/contactsActions';
import { save } from './services/localStorage';
import {
  addContact,
  fetchContactsList,
  deleteContactsOps,
  filterContact,
} from './redux/contacts/actions';

function App() {
  const contacts = useSelector(state => state.phonebookReducers.contacts);
  const filter = useSelector(state => state.phonebookReducers.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const contactsFromStorage = localStorage.getItem('contacts');
  //   const parsedStoragedContacts = JSON.parse(contactsFromStorage);
  //   if (parsedStoragedContacts) {
  //     parsedStoragedContacts.map(storageContact => {
  //       if (
  //         contacts.some(contact => {
  //           return contact.name === storageContact.name;
  //         })
  //       ) {
  //         return true;
  //       }
  //       return dispatch(addContact(storageContact));
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   save('contacts', contacts);
  // }, [contacts]);

  const createContact = newContact => {
    const dublicateContact = contacts.some(checkedContact => {
      return (
        checkedContact.name.toLowerCase() === newContact.name.toLowerCase()
      );
    });

    if (dublicateContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    console.log('newContact', newContact);
    dispatch(addContact(newContact));
  };

  const handleDelete = contactId => {
    dispatch(deleteContactsOps(contactId));
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value));
  };

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [dispatch]);

  const getFilteredContacts = () => {
    // const baseContacts = dispatch(fetchContactsList());
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="App">
      <header className="App-header">
        <Container title="Phonebook">
          <ContactForm createContact={createContact} />
        </Container>
        <Container title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDelete={handleDelete}
          ></ContactsList>
        </Container>
      </header>
    </div>
  );
}

export default App;
