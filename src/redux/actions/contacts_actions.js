import { v4 as uuidv4 } from 'uuid';
import types from '../types';
import { Notify } from 'notiflix';

export const addContact = (name, number) => {
  Notify.success('Well Done! Added ' + name);
  return {
    type: types.ADD,
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
};

export const deleteContact = (id, contacts) => {
  if (!id) return;
  const contact = contacts.find(contact => contact.id === id);
  if (!contact) {
    Notify.failure('Oh, no! Nothing was deleted.');
    return;
  }
  Notify.info(`Contact ${contact.name} was removed successfully`);
  return {
    type: types.DELETE,
    payload: id,
  };
};
