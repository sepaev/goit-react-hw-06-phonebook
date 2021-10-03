import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filterReducer, contactsReducer } from './reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
