import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import './index.css';
import './fonts/font-style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.root')
);