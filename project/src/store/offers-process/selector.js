import { NameSpace } from '../root-reducer';
import { createSelector } from 'reselect';
import dayjs from 'dayjs';

export const getOffers = (state) => state[NameSpace.OFFERS_PROCESS].offers;
export const getActiveOfferId = (state) => state[NameSpace.OFFERS_PROCESS].activeOfferId;
export const getCity = (state) => state[NameSpace.OFFERS_PROCESS].city;
export const getSort = (state) => state[NameSpace.OFFERS_PROCESS].sort;
export const getOffersById = (state, id) => state.offers.find((offer) => offer.id === id);
export const getRoomId = (state) => state[NameSpace.OFFERS_PROCESS].room.id;
export const getRoom = (state) => state[NameSpace.OFFERS_PROCESS].room;
export const getDataLoaded = (state) => state[NameSpace.OFFERS_PROCESS].isDataLoaded;
export const getComments = (state) => state[NameSpace.OFFERS_PROCESS].comments;
export const getNearby = (state) => state[NameSpace.OFFERS_PROCESS].nearby;
export const getLoading = (state) => state[NameSpace.OFFERS_PROCESS].loading;
export const getRequestStatus = (state) => state[NameSpace.OFFERS_PROCESS].requestStatus;

export const offersByCitySelector = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city),
);

export const commentsSortSelector = createSelector(
  [getComments],
  (comments) => comments.sort((comment1, comment2) => {
    if (comment1.date === comment2.date) {
      return 0;
    }
    return dayjs(comment2.date).diff(dayjs(comment1.date));
  }),
);

export const offersSortSelector = createSelector(
  [offersByCitySelector, getSort],
  (offers, sort) => {
    if (sort.name === 'priceToHigh') {
      return offers.sort((offer1, offer2) => offer1.price - offer2.price);
    }
    if (sort.name === 'priceToLow') {
      return offers.sort((offer1, offer2) => offer2.price - offer1.price);
    }
    if (sort.name === 'rating') {
      return offers.sort((offer1, offer2) => offer2.rating - offer1.rating);
    }
    return offers;
  },
);

export const getActiveOffer = createSelector(
  [getOffers, getActiveOfferId],
  (offers, id) => offers.find((offer) => offer.id === id),
);
