import axios from 'axios';

axios.defaults.baseURL = 'https://61f6bc3e2e1d7e0017fd6f29.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
