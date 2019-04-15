import {
  CREATE_PARTY_ENCOUNTERS,
  DELETE_PARTY_ENCOUNTERS,
  ADD_ENCOUNTER,
  REMOVE_ENCOUNTER,
  SELECT_ENCOUNTER,
  SET_INITIATIVE,
} from 'state/saved-encounters/types';

export const createPartyEncounters = party => ({
  type: CREATE_PARTY_ENCOUNTERS,
  payload: party,
});

export const deletePartyEncounters = party => ({
  type: DELETE_PARTY_ENCOUNTERS,
  payload: party,
});

export const addEncounter = (party, encounter) => ({
  type: ADD_ENCOUNTER,
  payload: {
    party,
    encounter,
  },
});

export const removeEncounter = (party, encounter) => ({
  type: REMOVE_ENCOUNTER,
  payload: {
    party,
    encounter,
  },
});

export const selectEncounter = (party, encounter) => ({
  type: SELECT_ENCOUNTER,
  payload: {
    party,
    encounter,
  },
});

export const setInitiative = (party, initiatives) => ({
  type: SET_INITIATIVE,
  payload: {
    party,
    initiatives,
  },
});
