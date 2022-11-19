<<<<<<< HEAD
import './main.css';
import store from './store';
import Router from './router';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
>>>>>>> bd3c57606bbf268b6570839118cee5263b5342f1


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


