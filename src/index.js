import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/App.css';
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // For measuring performance (optional)

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Measure and log performance metrics
reportWebVitals();
