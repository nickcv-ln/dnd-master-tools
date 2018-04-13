import {
  CREATE_ENCOUNTER,
  ADD_MONSTER,
  REMOVE_MONSTER,
} from 'state/encounters/types';

export const createEncounter = encounter => ({
  type: CREATE_ENCOUNTER,
  payload: encounter,
});

export const addMonster = monster => ({
  type: ADD_MONSTER,
  payload: monster,
});

export const removeMonster = monster => ({
  type: REMOVE_MONSTER,
  payload: monster,
});
