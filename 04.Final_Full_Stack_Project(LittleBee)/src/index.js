import React from 'react';
import ReactDOM from 'react-dom/client';
/**/
import App from './App';
/*/
import App from './Test';
/**/

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Meta from './Meta';
import GlobalStyles from './GlobalStyles';
import ScrollToTop from './components/scrolltotop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Meta />
            <GlobalStyles />
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </Provider>
);