// Import necessary modules from the 'react' and 'react-dom' libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Render the main App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);