import {ActionType} from '../action';
const initialCity = 'Paris';
const initialSort = {name: 'popular', label: 'Popular'};

const initialState = {
  city: initialCity,
  sort: initialSort,
  offers: [],
  comments: [],
  nearby: [],
  activeOfferId: null,
  isDataLoaded: false,
  room: null,
  loading: false,
  requestStatus: '',
};

const offersProcess = (state = initialState, action) => {
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
    case ActionType.SET_ROOM: {
      return {
        ...state,
        room: action.payload,
      };
    }
    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case ActionType.SET_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case ActionType.SET_NEARBY: {
      return {
        ...state,
        nearby: action.payload,
      };
    }
    case ActionType.SET_STATUS_REQUEST: {
      return {
        ...state,
        requestStatus: action.payload,
      };
    }
    default:
      return state;
  }
};


export {offersProcess};
