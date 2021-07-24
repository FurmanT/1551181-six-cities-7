import React from 'react';
import { offerPropTypes } from '../../prop-types';
import CardInfo from '../card-info/card-info';
import PropTypes from 'prop-types';

function OfferCard({offer, onMouseEnter, onMouseLeave}) {
  const {id, isPremium, previewImage } = offer;

  return (
    <article className="cities__place-card place-card" id={id}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
        <CardInfo offer={offer} />
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: offerPropTypes,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};
export default OfferCard;


