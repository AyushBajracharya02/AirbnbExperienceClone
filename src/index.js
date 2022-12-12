import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './Styles/body.css';

const body = ReactDOM.createRoot(document.querySelector('body'));
body.render(
  <App />
);
