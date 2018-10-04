import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import Root from './components/root';
import configureStore from './store/store';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.getState;

  ReactDOM.render( <Root store={ store } />, root);
});

serviceWorker.unregister();
