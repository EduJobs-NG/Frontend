import './index.css';
/* Importing the AuthContext and the auth function from the auth.js file. */
import store from './store';
import Router from './router';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </StrictMode>
);
