import {ActionType} from '../action';

const initialState = {
  statusSent: '',
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_STATUS_SENT_REVIEW: {
      return {
        ...state,
        statusSent: action.payload,
      };
    }
    default:
      return state;
  }
};

export {review};
