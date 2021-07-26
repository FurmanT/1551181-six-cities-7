export const getOffers = (state) => state.offers;

export const getSortOffers = (state) => {
  const offers = state.offers.filter((offer) => offer.city.name === state.city);

  if (state.sort.name === 'priceToHigh') {
    return offers.sort((offer1, offer2) => offer1.price - offer2.price);
  }
  if (state.sort.name === 'priceToLow') {
    return offers.sort((offer1, offer2) => offer2.price - offer1.price);
  }
  if (state.sort.name === 'rating') {
    return offers.sort((offer1, offer2) => offer2.rating - offer1.rating);
  }
  return offers;
};

export const getActiveOffer = (state) => state.offers.find((offer) => offer.id === state.activeOfferId);

export const getOffersById = (state, id) => state.offers.find((offer) => offer.id === id);
