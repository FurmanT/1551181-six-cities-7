import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { offerPropTypes } from '../../prop-types';
import CardInfo from '../card-info/card-info';
import { connect } from 'react-redux';
import Header from '../header/header';
import { getFavorite } from '../../store/offers-process/selector';
import { fetchFavoriteOffers } from '../../store/api-actions';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function Favorites({offers, fetchOffer}) {
  const cities = [];

  useEffect(() => {
    fetchOffer();
  }, [fetchOffer]);


  if (offers) {
  //eslint-disable-next-line
    offers.map((value) => {
      if (cities.indexOf(value.city.name) === -1) {
        cities.push(value.city.name);
      }
    });
  }

  if (!offers) {return null; }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            (offers.length === 0) ? (
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            ) : (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    cities.map((city) => {
                      const filterOffers = offers.filter((offer) => city === offer.city.name);
                      return (
                        <li className="favorites__locations-items" key={city}>
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <a className="locations__item-link" href="/">
                                <span>{city}</span>
                              </a>
                            </div>
                          </div>
                          <div className="favorites__places">
                            {filterOffers.map((offer) => (
                              <article className="favorites__card place-card" key={offer.id}>
                                <div className="favorites__image-wrapper place-card__image-wrapper">
                                  <Link to="/" onClick={(e) => e.preventDefault()}>
                                    <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place"/>
                                  </Link>
                                </div>
                                <div className="favorites__card-info place-card__info">
                                  <CardInfo offer={offer} />
                                </div>
                              </article>
                            ))}
                          </div>
                        </li>
                      );
                    })
                  }
                </ul>
              </section>
            )
          }
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.ROOT} className="footer__logo-link" >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
Favorites.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
  fetchOffer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffer() {
    dispatch(fetchFavoriteOffers());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
