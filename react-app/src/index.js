import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';

import TotalPriceProvider from "./context/TotalPriceContext";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TotalPriceProvider>
        <App />
      </TotalPriceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
