import {
  CREATE_ENCOUNTER,
  ADD_MONSTER,
  REMOVE_MONSTER,
  INCREASE_MONSTER_COUNT,
  DECREASE_MONSTER_COUNT,
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

export const increaseMonsterCount = monster => ({
  type: INCREASE_MONSTER_COUNT,
  payload: monster,
});

export const decreaseMonsterCount = monster => ({
  type: DECREASE_MONSTER_COUNT,
  payload: monster,
});
