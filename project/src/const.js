export const COUNT_NEIGHBOURHOOD_IN_MAP = 3;
export const MAX_RATING = 5;

export const cities = [ 'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const AppRoute = {
  SIGN_IN: '/login',
  ROOT: '/',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const RatingType = {
  PERFECT: {
    value: 5,
    title: 'perfect',
  },
  GOOD: {
    value: 4,
    title: 'good',
  },
  NOT_BAD: {
    value: 3,
    title: 'not bad',
  },
  BADLY: {
    value: 2,
    title: 'badly',
  },
  TERRIBLY: {
    value: 1,
    title: 'terribly',
  },
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};
