export const adaptOffersToClient = (offers) => {
  const newOffers = [];

  offers.forEach((offer) => {
    const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isPremium:  offer.is_premium ,
        isFavorite:  offer.is_favorite ,
        previewImage: offer.preview_image,
        host: Object.assign({}, offer.host, {
          avatarUrl: offer.host.avatar_url,
          isPro: offer.host.is_pro,
        }),
      },
    );

    // Ненужные ключи мы удаляем
    delete adaptedOffer.is_premium;
    delete adaptedOffer.is_favorite;
    delete adaptedOffer.preview_image;
    delete adaptedOffer.host.is_pro;
    delete adaptedOffer.host.avatar_url;
    newOffers.push(adaptedOffer);
  });
  return newOffers;
};

export const adaptUserToClient = (user) =>
  Object.assign(
    {},
    user,
    {
      avatarUrl: user.avatar_url,
      isPro: user.is_pro,
    },
  );
