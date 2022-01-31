import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from '../../services/api';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    const contact = {
      name,
      phone,
    };
    try {
      const contacts = await addContacts(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  },
);

export const deleteContactsOps = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contacts = await deleteContact(id);
    return contacts;
  },
);

export const filterContact = createAction('contact/filter');
