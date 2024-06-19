import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //  <React.StrictMode>
    <App />
  // </React.StrictMode> // 2 api calls to check any inconsistency while rendering. omly in dev mode
);
reportWebVitals();
