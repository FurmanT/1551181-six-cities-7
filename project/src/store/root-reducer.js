import { combineReducers } from 'redux';
import { offersProcess } from './offers-process/offers-process';
import { user } from './user/user';

export const NameSpace = {
  OFFERS_PROCESS: 'OFFERS_PROCESS',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.OFFERS_PROCESS]: offersProcess ,
  [NameSpace.USER]: user,
});

