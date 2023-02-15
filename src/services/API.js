import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://63ec8ec0be929df00cad5970.mockapi.io/contacts/',
});

export const getContacts = async () => (await contactsAPI.get()).data;

export const deleteContact = async id => (await contactsAPI.delete(id)).data;

export const addContact = async contact =>
  (await contactsAPI.post('', contact)).data;
