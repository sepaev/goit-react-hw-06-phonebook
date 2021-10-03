import { ADD, DELETE, CHANGE_FILTER } from './types';

export const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    default:
      return state;
  }
};
export const filterReducer = (state = '', { type, payload }) => {
  return state;
};
