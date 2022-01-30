import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add');
const deleteContact = createAction('contact/del');
const filterContact = createAction('contact/filter');

export { addContact, deleteContact, filterContact };
