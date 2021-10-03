import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const initState = { contacts: [], message: '' };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'crud/create':
      return {
        contacts: [...state.contacts, payload],
      };

    case 'crud/delete':
      return {
        contacts: payload,
      };

    default:
      return state;
  }
};
const store = createStore(reducer, composeWithDevTools());

export default store;
