import React from 'react';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types';
import OfferCardInfo from '../offer-card-info/offer-card-info';

function Favorites(props) {
  const offers = props.offers;

  const cities = [];
  // eslint-disable-next-line
  offers.map((value) => {
    if (cities.indexOf(value.city.name) === -1) {
      cities.push(value.city.name);
    }
  });

  return (
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
                            <OfferCardInfo offer={offers} />
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
  );
}
Favorites.propTypes = {
  offers: PropTypes.arrayOf(
    offerPropTypes).isRequired,
};
export default Favorites;


