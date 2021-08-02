import {ActionType} from '../action';

const initialState = {
  statusSent: '',
  statusForm: 'INIT',
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_STATUS_SENT_REVIEW: {
      return {
        ...state,
        statusSent: action.payload,
      };
    }
    case ActionType.SET_STATUS_REVIEW_FORM: {
      return {
        ...state,
        statusForm: action.payload,
      };
    }
    default:
      return state;
  }
};

export {review};
