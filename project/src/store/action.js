export const ActionType = {
  LOAD_OFFERS: 'offers/load',
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
  SET_STATUS_REQUEST: 'review/status',
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
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
  setStatusRequest: (status) => ({
    type: ActionType.SET_STATUS_REQUEST,
    payload: status,
  }),
};
