import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './contactsActions';
import { combineReducers } from 'redux';
import { addContact, fetchContactsList, deleteContactsOps } from './actions';

const contactsExample = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer(contactsExample, {
  [fetchContactsList.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContactsOps.fulfilled]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload.id);
  },
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsList.rejected]: (_, { payload }) => payload,
  [fetchContactsList.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  error,
});
