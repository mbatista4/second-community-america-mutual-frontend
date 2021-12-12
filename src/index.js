import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import {LoggedProvider} from './Context/LoggedContext'

ReactDOM.render(
  <React.StrictMode>
    <LoggedProvider>
      <App />
    </LoggedProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

