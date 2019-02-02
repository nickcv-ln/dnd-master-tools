import {
  CREATE_PARTY_ENCOUNTERS,
  DELETE_PARTY_ENCOUNTERS,
} from 'state/saved-encounters/types';

export const createPartyEncounters = party => ({
  type: CREATE_PARTY_ENCOUNTERS,
  payload: party,
});

export const deletePartyEncounters = party => ({
  type: DELETE_PARTY_ENCOUNTERS,
  payload: party,
});
