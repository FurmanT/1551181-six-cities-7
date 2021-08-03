import React from 'react';
import PropTypes from 'prop-types';
import City from '../city/city';
import { connect } from 'react-redux';
import { CITIES, RESULT } from '../../const';
import { ActionCreator } from '../../store/action';
import Header from '../header/header';
import { getCity, getSort } from '../../store/offers-process/selector';
import { getStatusLoadOffers } from '../../store/offers-process/selector';
import {Link} from 'react-router-dom';

function Main(props) {
  const {city, onChangeCity, sort, onChangeSort, statusLoad} = props;

  const onChangeCityHandler = (event) => {
    event.preventDefault();
    onChangeCity(event.currentTarget.dataset.name);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                CITIES.map((item) => (
                  <li className="locations__item" key={item}>
                    <Link to="/#" className= {`locations__item-link tabs__item ${item === city && 'tabs__item--active'}`} data-name={item} onClick={onChangeCityHandler} >
                      <span>{item}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>

        {(statusLoad === RESULT.ERROR) ? (
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        ) : (
          <City
            name={city}
            sortBy={sort}
            setSort={onChangeSort}
          />
        )}
      </main>
    </div>
  );
}
Main.propTypes = {
  city: PropTypes.string.isRequired,
  sort: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired}).isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onChangeSort: PropTypes.func.isRequired,
  statusLoad: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  sort: getSort(state),
  statusLoad: getStatusLoadOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onChangeSort(sort) {
    dispatch(ActionCreator.setSort(sort));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

