import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Meta from './Meta';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta />
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
