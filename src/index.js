import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

dotenv.config();

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);