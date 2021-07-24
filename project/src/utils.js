export const adaptToClient = (offers) => {
  const newOffers = [];

  offers.forEach((offer) => {
    const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isPremium:  offer.is_premium ,
        previewImage: offer.preview_image,
        host: Object.assign({}, offer.host, {
          avatarUrl: offer.host.avatar_url,
          isPro: offer.host.is_pro,
        }),
      },
    );

    // Ненужные ключи мы удаляем
    delete adaptedOffer.is_premium;
    delete adaptedOffer.preview_image;
    delete adaptedOffer.host.is_pro;
    delete adaptedOffer.host.avatar_url;
    newOffers.push(adaptedOffer);
  });
  return newOffers;
};

