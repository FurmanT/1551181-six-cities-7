import React from 'react';
import Header from '../header/header';
import {AppRoute, cities} from '../../const';
import {Link} from 'react-router-dom';

function MainEmpty() {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <div>Произошла ошибка загрузки данных</div>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                cities.map((item) => (
                  <li className="locations__item" key={item}>
                    <Link to={AppRoute.ROOT}  className="locations__item-link tabs__item">
                      <span>{item}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmpty;
