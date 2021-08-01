import React from 'react';
import { offerPropTypes } from '../../prop-types';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { MAX_RATING } from '../../const';
import { changeFavoriteRoom } from '../../store/api-actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selector';

function CardInfo(props) {
  const {id, price, rating, title, type, isFavorite} = props.offer;
  const stars = (Math.round(rating) * 100) / MAX_RATING;
  const history = useHistory();

  const onHandlerFavoriteClick = (e) => {
    e.preventDefault();
    if (props.authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.SIGN_IN);
    }
    props.onSetFavoriteOffer(id, Number(!isFavorite));
  };

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp; night</span>
        </div>
        <button className={`place-card__bookmark-button ${isFavorite ?'place-card__bookmark-button--active' : ''} button`} type="button" onClick={onHandlerFavoriteClick}>
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
  onSetFavoriteOffer: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  onSetFavoriteOffer(id, status) {
    dispatch(changeFavoriteRoom(id, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CardInfo));
