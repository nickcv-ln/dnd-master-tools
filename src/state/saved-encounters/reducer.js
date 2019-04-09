import omit from 'object.omit';
import {
  CREATE_PARTY_ENCOUNTERS,
  DELETE_PARTY_ENCOUNTERS,
  ADD_ENCOUNTER,
  REMOVE_ENCOUNTER,
  SELECT_ENCOUNTER,
} from 'state/saved-encounters/types';

const defaultState = {};

const encountersReducer = (state, action) => {
  switch (action.type) {
    case ADD_ENCOUNTER:
      return [
        ...state,
        action.payload.encounter,
      ];
    case REMOVE_ENCOUNTER: {
      const newPartyEncounters = [...state];
      newPartyEncounters.splice(action.payload.encounter, 1);
      return newPartyEncounters;
    }
    default:
      return state;
  }
};

const selectedEncounterReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_ENCOUNTER:
      return state === action.payload.encounter ?
        null :
        state;
    case SELECT_ENCOUNTER:
      return action.payload.encounter;
    default:
      return state;
  }
};

const reducer = (state = defaultState, action = {}) => {
  const party = action.payload ? action.payload.party : null;
  switch (action.type) {
    case CREATE_PARTY_ENCOUNTERS:
      return {
        ...state,
        [party]: {
          selectedEncounter: null,
          encounters: [],
        },
      };
    case DELETE_PARTY_ENCOUNTERS:
      return {
        ...omit(state, party),
      };
    default:
      if (party) {
        return {
          ...state,
          [party]: {
            selectedEncounter: selectedEncounterReducer(state[party].selectedEncounter, action),
            encounters: encountersReducer(state[party].encounters, action),
          },
        };
      }
      return state;
  }
};

export default reducer;
