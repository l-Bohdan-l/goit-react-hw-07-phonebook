import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContact,
  fetchContactsList,
  deleteContactsOps,
  filterContact,
} from './actions';

const contacts = createReducer([], {
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
