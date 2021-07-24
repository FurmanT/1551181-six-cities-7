export const ActionType = {
  LOAD_OFFERS: 'offers/load',
  CHANGE_CITY: 'city/change',
  ADD_OFFERS: 'offers/add',
  SET_ACTIVE_OFFER: 'offers/active',
  SET_SORT: 'sort/set',
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
  addOffers: () => ({
    type: ActionType.ADD_OFFERS,
  }),
  setActiveOffer: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id,
  }),
  setSort: (sort) => ({
    type: ActionType.SET_SORT,
    payload: sort,
  }),
};
