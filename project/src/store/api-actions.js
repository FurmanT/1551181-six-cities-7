import { ActionCreator } from './action';
import { adaptToClient } from '../utils';
export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get('hotels')
    .then(({data}) => dispatch(ActionCreator.loadOffers(adaptToClient(data))))
    .then(() => dispatch(ActionCreator.addOffers()))
);
