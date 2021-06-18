import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getHotels } from './mock/hotel';

const hotels = getHotels() ;

ReactDOM.render(
  <React.StrictMode>
    <App hotels = {hotels}/>
  </React.StrictMode>,
  document.getElementById('root'));
