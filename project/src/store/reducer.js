import {ActionType} from './action';

const initialCity = 'Paris';
const initialSort = {name: 'popular', label: 'Popular'};

const initialState = {
  city: initialCity,
  sort: initialSort,
  offers: [],
  activeOfferId: null,
  allOffers: [],
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        city: action.payload,
        sort: initialSort,
        activeOfferId: null,
      };
    }
    case ActionType.SET_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        allOffers: action.payload,
      };
    }
    case ActionType.ADD_OFFERS: {
      const offers = state.allOffers.filter((offer) => offer.city.name === state.city);
      return {
        ...state,
        offers,
        isDataLoaded: true,
      };
    }
    case ActionType.SET_ACTIVE_OFFER: {
      return {
        ...state,
        activeOfferId: action.payload,
      };
    }
    default:
      return state;
  }
};


export {reducer};
