import React from 'react';
import { offerPropTypes } from '../../prop-types';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { MAX_RATING } from '../../const';

function CardInfo(props) {
  const {id, price, rating, title, type} = props.offer;
  const stars = (Math.round(rating) * 100) / MAX_RATING;

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp; night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${stars}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={generatePath(AppRoute.ROOM,{ id })} >{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </>
  );
}

CardInfo.propTypes = {
  offer: offerPropTypes,
};
export default CardInfo;


