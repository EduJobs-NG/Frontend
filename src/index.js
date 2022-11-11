import './index.css';
import Router from './router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Router />
    </StrictMode>
);
