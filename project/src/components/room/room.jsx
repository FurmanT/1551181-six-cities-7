import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { offerPropTypes, reviewPropTypes } from '../../prop-types';
import Header from '../header/header';
import { fetchOfferNearby, fetchOfferComments, changeFavoriteRoom } from '../../store/api-actions';
import PropTypes from 'prop-types';
import {useHistory, useParams} from 'react-router-dom';
import ReviewsList from '../reviews-list/reviews-list';
import NearOfferList from '../near-offer-list/near-offer-list';
import Map from '../map/map';
import NotFoundPage from '../not-found-page/not-found-page';
import {
  getNearby,
  getLoading,
  getOffersById,
  getCommentsSortSelector
} from '../../store/offers-process/selector';
import {AppRoute, AuthorizationStatus, MAX_RATING, RESULT} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selector';
import { getStatusLoadComments, getStatusLoadNearby} from '../../store/offers-process/selector';
import {ActionCreator} from '../../store/action';

function Room(props) {
  const { offer, comments, nearbyOffers, fetchDataOffer, loading, errorLoadComments, errorLoadNearby, onSetFavoriteRoom, onSetActiveOffer} = props;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    onSetActiveOffer(parseInt(id, 10));
  }, [id,onSetActiveOffer]);


  useEffect(() => {
    fetchDataOffer(id);
  }, [fetchDataOffer, id]);

  const memoizedValueOffers = useMemo(() => {
    if (offer && nearbyOffers) {
      const offerForMap = nearbyOffers.map((a) => ({...a}));
      offerForMap.push(offer);
      return offerForMap;
    }
  }, [nearbyOffers, offer]);

  if (errorLoadComments === RESULT.ERROR || errorLoadNearby) {
    return <NotFoundPage/>;
  }

  if (loading) {
    return null;
  }

  if (!offer || nearbyOffers.length === 0) {
    return null;
  }

  const onHandlerFavoriteClick = (event) => {
    event.preventDefault();
    if (props.authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.SIGN_IN);
    }
    onSetFavoriteRoom(id, Number(!offer.isFavorite));
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, 6).map((image) => (
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
                <button className={`property__bookmark-button ${offer.isFavorite ?'property__bookmark-button--active' : ''} button`} type="button" onClick={onHandlerFavoriteClick}>
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
          <Map className="property__map" offers={memoizedValueOffers}  showActiveMarker/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearOfferList offers = {nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}
Room.propTypes = {
  offer: offerPropTypes,
  comments: PropTypes.arrayOf(reviewPropTypes),
  nearbyOffers: PropTypes.arrayOf(offerPropTypes),
  fetchDataOffer: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorLoadComments: PropTypes.string.isRequired,
  errorLoadNearby: PropTypes.string.isRequired,
  onSetFavoriteRoom: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSetActiveOffer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match?.params.id, 10);
  return {
    offer: getOffersById(state, id),
    comments: getCommentsSortSelector(state),
    nearbyOffers: getNearby(state),
    loading: getLoading(state),
    errorLoadComments: getStatusLoadComments(state),
    errorLoadNearby: getStatusLoadNearby(state),
    authorizationStatus: getAuthorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchDataOffer(id) {
    dispatch(fetchOfferNearby(id));
    dispatch(fetchOfferComments(id));
  },
  onSetFavoriteRoom(id, status) {
    dispatch(changeFavoriteRoom(id, status));
  },
  onSetActiveOffer(id) {
    dispatch(ActionCreator.setActiveOffer(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);

