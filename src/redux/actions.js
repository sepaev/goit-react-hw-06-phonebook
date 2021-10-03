import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE, CHANGE_FILTER } from './types';

export const deleteContact = value => ({
  type: DELETE,
  payload: value,
});

export const addContact = (name, number) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});
