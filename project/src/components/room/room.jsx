import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { offerPropTypes, reviewPropTypes } from '../../prop-types';
import Header from '../header/header';
import { getOfferById, setFavoriteRoom } from '../../store/api-actions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ReviewsList from '../reviews-list/reviews-list';
import NearOfferList from '../near-offer-list/near-offer-list';
import Map from '../map/map';
import NotFoundPage from '../not-found-page/not-found-page';
import {
  getNearby,
  getLoading,
  getRequestStatus,
  getRoom,
  commentsSortSelector
} from '../../store/offers-process/selector';
import {MAX_RATING} from '../../const';

function Room(props) {
  const { offer, comments, nearby, getDataOffer, loading, error, onSetFavoriteRoom} = props;
  const { id } = useParams();

  useEffect(() => {
    getDataOffer(id);
  }, [getDataOffer, id]);

  if (error === 'error') {
    return <NotFoundPage/>;
  }

  if (loading) {
    return null;
  }

  if (offer === null || nearby.length === 0 || comments.length === 0) {
    return null;
  }

  const onHandlerFavoriteClick = (e) => {
    e.preventDefault();
    onSetFavoriteRoom(id, Number(!offer.isFavorite));
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={`property__bookmark-button ${offer.isFavorite && 'property__bookmark-button--active'} button`} type="button" onClick={onHandlerFavoriteClick}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${(Math.round(offer.rating) * 100) / MAX_RATING}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                {offer.type &&
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>}

                {offer.bedrooms &&
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>}

                {offer.maxAdults &&
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>}
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              {comments && <ReviewsList reviews={comments}/>}
            </div>
          </div>
          <Map className="property__map" offers={nearby} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearOfferList offers = {nearby} />
          </section>
        </div>
      </main>
    </div>
  );
}
Room.propTypes = {
  offer: offerPropTypes,
  comments: PropTypes.arrayOf(reviewPropTypes),
  nearby: PropTypes.arrayOf(offerPropTypes),
  getDataOffer: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onSetFavoriteRoom: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offer: getRoom(state),
  comments: commentsSortSelector(state),
  nearby: getNearby(state),
  loading: getLoading(state),
  error: getRequestStatus(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  getDataOffer(id) {
    dispatch(getOfferById(id));
  },
  onSetFavoriteRoom(id, status) {
    dispatch(setFavoriteRoom(id, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);

