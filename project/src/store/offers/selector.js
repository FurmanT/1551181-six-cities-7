export const getOffers = (state) => state.offers;

export const getSortOffers = (state) => {
  if (state.sort.name === 'priceToHigh') {
    return state.offers.slice(0).sort((offer1, offer2) => offer1.price - offer2.price);
  }
  if (state.sort.name === 'priceToLow') {
    return state.offers.slice(0).sort((offer1, offer2) => offer2.price - offer1.price);
  }
  if (state.sort.name === 'rating') {
    return state.offers.slice(0).sort((offer1, offer2) => offer2.rating - offer1.rating);
  }
  return state.offers;
};

export const getActiveOffer = (state) => state.offers.find((offer) => offer.id === state.activeOfferId);


