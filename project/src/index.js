import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { hotels } from './mock/hotel';

ReactDOM.render(
  <React.StrictMode>
    <App hotels = {hotels}/>
  </React.StrictMode>,
  document.getElementById('root'));
