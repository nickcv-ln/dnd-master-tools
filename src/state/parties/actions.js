import { ADD_PARTY } from 'state/parties/types';

// eslint-disable-next-line import/prefer-default-export
export const addParty = party => ({
  type: ADD_PARTY,
  payload: party,
});
