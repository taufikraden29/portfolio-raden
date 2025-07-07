import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles.js'; // Import global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles /> {/* Apply global styles here */}
      <App />
    </Router>
  </React.StrictMode>,
);