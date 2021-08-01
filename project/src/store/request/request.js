import {ActionType} from '../action';

const initialState = {
  status: '',
  message: '',
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_STATUS_REQUEST: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case ActionType.SET_MESSAGE_REQUEST: {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      return state;
  }
};

export {request};
