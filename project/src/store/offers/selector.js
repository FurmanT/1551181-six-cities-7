export const getOffers = (state) => state.offers;
export const getSortOffers = (state, sort) => {
  if (sort === 'priceToHigh') {
    //eslint-disable-next-line
    return state.offers.slice(0).sort(function(offer1, offer2) {
      return offer1.price - offer2.price;
    });
  }
  if (sort === 'priceToLow') {
    //eslint-disable-next-line
    return state.offers.slice(0).sort(function(offer1, offer2) {
      return offer2.price - offer1.price;
    });
  }
  if (sort === 'rating') {
    //eslint-disable-next-line
    return state.offers.slice(0).sort(function(offer1, offer2) {
      return offer2.rating - offer1.rating;
    });
  }
  return state.offers;
};
