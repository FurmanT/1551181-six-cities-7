import { NameSpace } from '../root-reducer';

export const getStatus = (state) => state[NameSpace.REVIEW].statusSent;

