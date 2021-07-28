export const adaptOffersToClient = (offers) => {
  const newOffers = [];

  offers.forEach((offer) => {
    const adaptedOffer = Object.assign(
      {},
      offer,
      {
        isPremium:  offer.is_premium,
        maxAdults: offer.max_adults,
        isFavorite:  offer.is_favorite,
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

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      maxAdults: offer.max_adults,
      isPremium:  offer.is_premium,
      isFavorite:  offer.is_favorite ,
      previewImage: offer.preview_image,
      host: Object.assign({}, offer.host, {
        avatarUrl: offer.host.avatar_url,
        isPro: offer.host.is_pro,
      }),
    },
  );

  delete adaptedOffer.is_premium;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
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

export const adaptCommentToClient = (comments) => {
  const newComments = [];
  comments.forEach((comment) => {
    const adaptedComment = Object.assign(
      {},
      comment,
      {
        user: Object.assign({}, comment.user, {
          isPro: comment.user.is_pro,
          avatarUrl: comment.user.avatar_url,
        }),
      },
    );
    newComments.push(adaptedComment);
  });
  return newComments;
};

