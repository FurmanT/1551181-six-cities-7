import {ActionType} from './action';
import { offers as mockOffers } from '../mocks/offers';

const initialCity = 'Paris';
const initialOffers = mockOffers.filter((offer) => offer.city.name === initialCity);

const initialState = {
  city: initialCity,
  offers: initialOffers,
  activeOffer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case ActionType.ADD_OFFERS: {
      const offers = mockOffers.filter((offer) => offer.city.name === state.city);
      return {
        ...state,
        offers,
      };
    }
    case ActionType.SET_ACTIVE_OFFER: {
      return {
        ...state,
        activeOffer: state.offers.find((offer) => offer.id === action.payload) ,
      };
    }
    default:
      return state;
  }
};


export {reducer};
