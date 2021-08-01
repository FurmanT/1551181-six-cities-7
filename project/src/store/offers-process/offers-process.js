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
  isOffersLoaded: false,
  loading: false,
  statusLoadComments: '',
  statusLoadNearby: '',
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
        isOffersLoaded: true,
      };
    }

    case ActionType.LOAD_FAVORITE_OFFERS: {
      return {
        ...state,
        offers: state.offers.map((offer) => {
          const find =  action.payload.find((item) => (item.id === offer.id));
          return find ? find : offer;
        }),
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
        offers: state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer),
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
    case ActionType.SET_STATUS_LOAD_COMMENTS: {
      return {
        ...state,
        statusLoadComments: action.payload,
      };
    }
    case ActionType.SET_STATUS_LOAD_NEARBY: {
      return {
        ...state,
        statusLoadNearby: action.payload,
      };
    }
    default:
      return state;
  }
};

export {offersProcess};
