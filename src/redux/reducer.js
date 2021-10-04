import { ADD, DELETE, CHANGE_FILTER, ADD_NEW_CONTACT } from './types';

export const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export const newContactReducer = (state = { newName: '', newNumber: '' }, { type, payload }) => {
  switch (type) {
    case ADD_NEW_CONTACT:
      return payload;
    default:
      return state;
  }
};
