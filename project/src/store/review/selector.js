import { NameSpace } from '../root-reducer';

export const getStatus = (state) => state[NameSpace.REVIEW].statusSent;
export const getStatusForm = (state) => state[NameSpace.REVIEW].statusForm;


