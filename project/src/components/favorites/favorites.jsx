import React from 'react';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

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
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">&euro;{offer.price}</b>
                                <span className="place-card__price-text">&#47;&nbsp;night</span>
                              </div>
                              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                <svg className="place-card__bookmark-icon" width="18" height="19">
                                  <use xlinkHref="#icon-bookmark"></use>
                                </svg>
                                <span className="visually-hidden">In bookmarks</span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <span style={{width: offer.rating}}></span>
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <Link to={AppRoute.ROOM}>{offer.title}</Link>
                            </h2>
                            <p className="place-card__type">{offer.type}</p>
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


