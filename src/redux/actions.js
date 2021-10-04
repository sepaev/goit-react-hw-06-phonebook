import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE, CHANGE_FILTER, ADD_NEW_CONTACT } from './types';

export const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

export const addContact = (name, number) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const makeSearch = e => ({
  type: CHANGE_FILTER,
  payload: e.target.valuetrim().toLowerCase(),
});

export const addNewContactToState = e => {
  e.preventDefault();
  const nameRef = e.target.children[0].children[1];
  const numberRef = e.target.children[1].children[1];
  const inputName = nameRef.value.trim();
  const inputNumber = numberRef.value;

  return {
    type: ADD_NEW_CONTACT,
    payload: { newName: inputName, newNumber: inputNumber },
  };
};
