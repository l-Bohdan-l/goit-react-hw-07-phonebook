import { configureStore } from '@reduxjs/toolkit';
import phonebookReducers from '../contacts/contactsReducers';

const store = configureStore({
  reducer: {
    phonebookReducers,
  },
});

export default store;
