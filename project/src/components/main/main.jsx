import React from 'react';
import PropTypes from 'prop-types';
import City from '../city/city';
import { connect } from 'react-redux';
import { AppRoute, cities } from '../../const';
import { ActionCreator } from '../../store/action';
import { logout } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import { useHistory } from 'react-router-dom';

function Main(props) {
  const {city, onChangeCity, sort, onChangeSort, authorizationStatus, onLogOut} = props;
  const history = useHistory();

  const onChangeCityHandler = (e) => {
    const name = cities.find((item) => item === e.currentTarget.dataset.name, 10);
    onChangeCity(name);
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
                {
                  authorizationStatus === AuthorizationStatus.NO_AUTH ? (
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="/" onClick={() => history.push(AppRoute.SIGN_IN)}>
                        <span className="header__signout">Sign in</span>
                      </a>
                    </li>
                  ) : (
                    <>
                      <li className="header__nav-item user">
                        <a className="header__nav-link header__nav-link--profile" href="/">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        </a>
                      </li>
                      <li className="header__nav-item">
                        <a className="header__nav-link" href="/" onClick={() => onLogOut()}>
                          <span className="header__signout">Sign out</span>
                        </a>
                      </li>
                    </>
                  )
                }
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
  authorizationStatus: PropTypes.string,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  sort: state.sort,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
    // dispatch(ActionCreator.addOffers());
  },
  onChangeSort(sort) {
    dispatch(ActionCreator.setSort(sort));
  },
  onLogOut() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

