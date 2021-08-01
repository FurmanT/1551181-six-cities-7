import React from 'react';
import { offerPropTypes } from '../../prop-types';
import CardInfo from '../card-info/card-info';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NearCard({offer, onMouseEnter}) {
  const {id, isPremium, previewImage } = offer;

  return (
    <article className="near-places__card place-card"  id={id}  onMouseEnter={onMouseEnter}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="/" onClick={(e) => e.preventDefault()}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place " />
        </Link>
      </div>
      <div className="place-card__info">
        <CardInfo offer={offer} />
      </div>
    </article>
  );
}

NearCard.propTypes = {
  offer: offerPropTypes,
  onMouseEnter: PropTypes.func.isRequired,
};

export default NearCard;


