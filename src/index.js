import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { myAction } from './redux/actions';
import reportWebVitals from './reportWebVitals';

console.log(store);
// console.log(myAction);
store.dispatch(myAction);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
