export const ActionType = {
  CHANGE_CITY: 'city/change',
  ADD_OFFERS: 'offers/add',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  addOffers: () => ({
    type: ActionType.ADD_OFFERS,
  }),
};
