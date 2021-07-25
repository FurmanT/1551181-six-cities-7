export const ActionType = {
  LOAD_OFFERS: 'offers/load',
  CHANGE_CITY: 'city/change',
  SET_ACTIVE_OFFER: 'offers/active',
  SET_SORT: 'sort/set',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
};
