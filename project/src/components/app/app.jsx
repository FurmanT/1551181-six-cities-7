import React from 'react';
import Main from './main/main';
import {nanoid} from 'nanoid';

function App() {

  const places = [
    {
      id: nanoid(),
      mark: 'Premium',
      img: 'img/apartment-01.jpg',
      price: 120,
      priceText: 'night',
      rating: 80,
      name: 'Beautiful &amp; luxurious apartment at great location',
      type: 'Apartment',
    },
    {
      id: nanoid(),
      mark: '',
      img: 'img/room.jpg',
      price: 80 ,
      priceText: 'night',
      rating: 80 ,
      name: 'Wood and stone place',
      type: 'Private room',
    },
    {
      id: nanoid(),
      mark: '',
      img: 'img/apartment-02.jpg',
      price: 132 ,
      priceText: 'night',
      rating: 80,
      name: 'Canal View Prinsengracht',
      type: 'Apartment',
    },
    {
      id: nanoid(),
      mark: 'Premium',
      img: 'img/apartment-03.jpg',
      price: 180 ,
      priceText: 'night',
      rating: 100,
      name: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
    },
    {
      id: nanoid(),
      mark: 'Premium',
      img: 'img/room.jpg',
      price: 80 ,
      priceText: 'night',
      rating: 80,
      name: 'Wood and stone place',
      type: 'Private room',
    },
  ];

  return <Main places={places}/>;
}

export default App;
