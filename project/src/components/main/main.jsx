import React from 'react';
import PropTypes from 'prop-types';
import City from '../city/city';
import { connect } from 'react-redux';
import { cities } from '../../const';
import { ActionCreator } from '../../store/action';
import Header from '../header/header';

function Main(props) {
  const {city, onChangeCity, sort, onChangeSort} = props;

  const onChangeCityHandler = (e) => {
    onChangeCity(e.currentTarget.dataset.name);
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
                cities.map((item) => (
                  <li className="locations__item" key={item}>
                    <a href="/#" className= {`locations__item-link tabs__item ${item === city && 'tabs__item--active'}`} data-name={item} onClick={onChangeCityHandler} >
                      <span>{item}</span>
                    </a>
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  sort: state.sort,
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

