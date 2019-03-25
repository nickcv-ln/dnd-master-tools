import {
  CREATE_ENCOUNTER,
  ADD_MONSTER,
  REMOVE_MONSTER,
  INCREASE_MONSTER_COUNT,
  DECREASE_MONSTER_COUNT,
} from 'state/encounters/types';

export const createEncounter = party => ({
  type: CREATE_ENCOUNTER,
  payload: {
    party,
  },
});

export const addMonster = (party, monster) => ({
  type: ADD_MONSTER,
  payload: {
    party,
    monster,
  },
});

export const removeMonster = (party, monsterName) => ({
  type: REMOVE_MONSTER,
  payload: {
    party,
    monsterName,
  },
});

export const increaseMonsterCount = (party, monsterName) => ({
  type: INCREASE_MONSTER_COUNT,
  payload: {
    party,
    monsterName,
  },
});

export const decreaseMonsterCount = (party, monsterName) => ({
  type: DECREASE_MONSTER_COUNT,
  payload: {
    party,
    monsterName,
  },
});
