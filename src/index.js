import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './store';
import './index.css';
import ContactContainer from './ContactContainer';

window.store = store;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContactContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

