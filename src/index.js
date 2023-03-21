import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import './index.css';
import App from './components/app/app.js';


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


