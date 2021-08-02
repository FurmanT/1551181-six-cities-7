import { combineReducers } from 'redux';
import { offersProcess } from './offers-process/offers-process';
import { user } from './user/user';
import { review } from './review/request';

export const NameSpace = {
  OFFERS_PROCESS: 'OFFERS_PROCESS',
  USER: 'USER',
  REVIEW: 'REVIEW',
};

export default combineReducers({
  [NameSpace.OFFERS_PROCESS]: offersProcess ,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: review,
});

