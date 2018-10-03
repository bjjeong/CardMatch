import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import configureStore from './store/store';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.dispatch;

  ReactDOM.render( <App store = { store } />, root);
});

serviceWorker.unregister();
