import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Controls } from './Controls';

const root = 
  document.getElementById('root') as HTMLElement

  ReactDOM.render(
  <React.StrictMode>
    <Controls />
  </React.StrictMode>,
  root
);