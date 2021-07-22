import React from 'react';
import PropTypes from 'prop-types';
import City from '../city/city';
import {connect} from 'react-redux';
import {cities} from '../../const';
import { ActionCreator } from '../../store/action';
import { options }  from '../sort/const';

function Main(props) {
  const {city, onChangeCity } = props;
  const [sort, SetSort] = React.useState(options[0]);

  const onChangeCityHandler = (e) => {
    const name = cities.find((item) => (item.id === parseInt(e.currentTarget.dataset.id, 10))).name;
    onChangeCity(name);
    SetSort(options[0]);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active"  href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                cities.map((item) => (
                  <li className="locations__item" key={item.id}>
                    <a href="/#" className= {` locations__item-link tabs__item ${item.name === city && 'tabs__item--active'}`} data-id={item.id} onClick={onChangeCityHandler} >
                      <span>{item.name}</span>
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
          setSort={SetSort}
        />
      </main>
    </div>
  );
}
Main.propTypes = {
  city: PropTypes.string,
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.addOffers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

