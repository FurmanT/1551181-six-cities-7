import React from 'react';
import PropTypes from 'prop-types';
import City from '../city/city';
import { connect } from 'react-redux';
import {cities, RESULT} from '../../const';
import { ActionCreator } from '../../store/action';
import Header from '../header/header';
import { getCity, getSort } from '../../store/offers-process/selector';
import {getStatusRequest} from '../../store/request/selector';
import MainEmpty from '../main-empty/main-empty';
import {Link} from 'react-router-dom';

function Main(props) {
  const {city, onChangeCity, sort, onChangeSort, statusLoad} = props;

  const onChangeCityHandler = (e) => {
    e.preventDefault();
    onChangeCity(e.currentTarget.dataset.name);
  };

  if (statusLoad === RESULT.ERROR) {
    return <MainEmpty/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                cities.map((item) => (
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
        <City
          name={city}
          sortBy={sort}
          setSort={onChangeSort}
        />
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
  statusLoad: getStatusRequest(state),
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

