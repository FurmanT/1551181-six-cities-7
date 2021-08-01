import { NameSpace } from '../root-reducer';

export const getStatusRequest = (state) => state[NameSpace.REQUEST].status;
export const getMessageRequest = (state) => state[NameSpace.REQUEST].message;
