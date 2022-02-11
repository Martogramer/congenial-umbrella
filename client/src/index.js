import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import generateStore from './store/index';
import { BrowserRouter } from 'react-router-dom';

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <App />
    
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
