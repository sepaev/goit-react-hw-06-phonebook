import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { addContact } from './redux/actions';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
console.log(store);
store.dispatch(addContact(5));
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
