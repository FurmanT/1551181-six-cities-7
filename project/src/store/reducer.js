import {ActionType} from './action';
import { AuthorizationStatus } from '../const';
const initialCity = 'Paris';
const initialSort = {name: 'popular', label: 'Popular'};

const initialState = {
  city: initialCity,
  sort: initialSort,
  offers: [],
  activeOfferId: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
        offers: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.SET_ACTIVE_OFFER: {
      return {
        ...state,
        activeOfferId: action.payload,
      };
    }
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};


export {reducer};
