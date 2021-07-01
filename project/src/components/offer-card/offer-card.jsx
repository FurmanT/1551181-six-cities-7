import React from 'react';
import { offerPropTypes } from '../../prop-types';
import OfferCardInfo from '../offer-card-info/offer-card-info';
import PropTypes from 'prop-types';

function OfferCard({offer , onMouseEnter }) {
  const {id, isPremium, previewImage } = offer;

  return (
    <article className="cities__place-card place-card" id={id}  onMouseEnter={onMouseEnter}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place " />
        </a>
      </div>
      <div className="place-card__info">
        <OfferCardInfo offer={offer} />
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: offerPropTypes,
  onMouseEnter: PropTypes.func.isRequired,
};
export default OfferCard;


