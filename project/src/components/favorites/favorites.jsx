import React from 'react';
import PropTypes from 'prop-types';
import { offerPropTypes } from '../../prop-types';
import CardInfo from '../card-info/card-info';
import { connect } from 'react-redux';
import Header from '../header/header';

function Favorites(props) {
  const offers = props.offers;
  const cities = [];
  //eslint-disable-next-line
  offers.map((value) => {
    if (cities.indexOf(value.city.name) === -1) {
      cities.push(value.city.name);
    }
  });

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                              <a href="/">
                                <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place"/>
                              </a>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <CardInfo offer={offers} />
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
        </div>
      </main>
    </div>
  );
}
Favorites.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export default connect(mapStateToProps, null)(Favorites);
