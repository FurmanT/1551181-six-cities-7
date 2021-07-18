export const COUNT_NEIGHBOURHOOD_IN_MAP = 3;
export const MAX_RATING = 5;

export const cities = [
  {
    id: 1,
    name: 'Paris',
  },
  {
    id: 2,
    name: 'Cologne',
  },
  {
    id: 3,
    name: 'Brussels',
  },
  {
    id: 4,
    name: 'Amsterdam',
  },
  {
    id: 5,
    name: 'Hamburg',
  },
  {
    id: 6,
    name: 'Dusseldorf',
  },
];

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

