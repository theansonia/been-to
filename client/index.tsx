import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './AppRoot';
import './style.css';
import reducer from './reducers/Reducers'

const store = createStore(reducer);

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
