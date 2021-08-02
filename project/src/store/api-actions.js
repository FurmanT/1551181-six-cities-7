import { ActionCreator } from './action';
import { adaptOffersToClient, adaptUserToClient, adaptOfferToClient, adaptCommentToClient } from '../utils';
import {APIRoute, AuthorizationStatus, RESULT} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(adaptOffersToClient(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setStatusLoadOffers(RESULT.ERROR));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
    })
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);


export const fetchOfferComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.setComments(adaptCommentToClient(data))))
    .catch(() => dispatch(ActionCreator.setStatusLoadComments(RESULT.ERROR)));
};

export const fetchOfferNearby = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.setNearby(adaptOffersToClient(data))))
    .catch(() => dispatch(ActionCreator.setStatusLoadNearby(RESULT.ERROR)));
};

export const sentReview = (id, review) => (dispatch, _getState, api) => {
  api.post(`comments/${id}`, review)
    .then(({data}) => {
      dispatch(ActionCreator.setComments(adaptCommentToClient(data)));
      dispatch(ActionCreator.setStatusSentReview(RESULT.SUCCESS));
    })
    .catch(() => {
      dispatch(ActionCreator.setStatusSentReview(RESULT.ERROR));
    });
};

export const changeFavoriteRoom = (id, status) => (dispatch, _getState, api) => {
  api.post(`favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(ActionCreator.setRoom(adaptOfferToClient(data)));
    })
    .catch(() => dispatch(ActionCreator.setStatusChangeFavorite(RESULT.ERROR)));
};

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavoriteOffers(adaptOffersToClient(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setStatusFetchFavoriteOffers(RESULT.ERROR));
    })
);
