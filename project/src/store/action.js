export const ActionType = {
  LOAD_OFFERS: 'offers/load',
  LOAD_FAVORITE_OFFERS: 'offers/loadFavorite',
  CHANGE_CITY: 'city/change',
  SET_ACTIVE_OFFER: 'offers/active',
  SET_SORT: 'sort/set',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_USER: 'user/set',
  SET_ROOM: 'room/set',
  SET_LOADING: 'load/set',
  SET_COMMENTS: 'comments/set',
  SET_NEARBY: 'nearby/set',
  SET_REVIEW: 'review/set',
  SET_STATUS_SENT_REVIEW: 'review/setStatus',
  SET_STATUS_LOAD_COMMENTS: 'comments/statusLoad',
  SET_STATUS_LOAD_NEARBY: 'nearby/statusLoad',
  SET_STATUS_LOAD_OFFERS: 'offers/statusLoad',
  SET_STATUS_CHANGE_FAVORITE: 'offers/statusChangeFavorite',
  SET_STATUS_FETCH_FAVORITE_OFFERS: 'offers/statusFetchFavoriteOffers',
  SET_STATUS_REVIEW_FORM: 'review/setStatusForm',
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadFavoriteOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setActiveOffer: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id,
  }),
  setSort: (sort) => ({
    type: ActionType.SET_SORT,
    payload: sort,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  setUser: (user) =>({
    type: ActionType.SET_USER,
    payload: user,
  }),
  setRoom: (room) => ({
    type: ActionType.SET_ROOM,
    payload: room,
  }),
  setLoad: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status,
  }),
  setComments: (comments) => ({
    type: ActionType.SET_COMMENTS,
    payload: comments,
  }),
  setNearby: (nearby) => ({
    type: ActionType.SET_NEARBY,
    payload: nearby,
  }),
  setReview: (review) => ({
    type: ActionType.SET_REVIEW,
    payload: review,
  }),
  setStatusSentReview: (status) => ({
    type: ActionType.SET_STATUS_SENT_REVIEW,
    payload: status,
  }),
  setStatusLoadComments: (status) => ({
    type: ActionType.SET_STATUS_LOAD_COMMENTS,
    payload: status,
  }),
  setStatusLoadNearby: (status) => ({
    type: ActionType.SET_STATUS_LOAD_NEARBY,
    payload: status,
  }),
  setStatusChangeFavorite: (status) => ({
    type: ActionType.SET_STATUS_CHANGE_FAVORITE,
    payload: status,
  }),
  setStatusFetchFavoriteOffers: (status) => ({
    type: ActionType.SET_STATUS_FETCH_FAVORITE_OFFERS,
    payload: status,
  }),
  setStatusFormReview: (status) => ({
    type: ActionType.SET_STATUS_REVIEW_FORM,
    payload: status,
  }),
};
