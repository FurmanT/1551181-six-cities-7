export const ActionType = {
  CHANGE_CITY: 'city/change',
  ADD_OFFERS: 'offers/add',
  SET_ACTIVE_OFFER: 'offers/active',
};

export const ActionCreator = {
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
};
