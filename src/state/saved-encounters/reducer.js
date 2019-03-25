import omit from 'object.omit';
import {
  CREATE_PARTY_ENCOUNTERS,
  DELETE_PARTY_ENCOUNTERS,
  ADD_ENCOUNTER,
  REMOVE_ENCOUNTER,
} from 'state/saved-encounters/types';

const defaultState = {};

const reducer = (state = defaultState, action = {}) => {
  // eslint-disable-next-line prefer-destructuring
  const party = action.payload ? action.payload.party : null;
  switch (action.type) {
    case CREATE_PARTY_ENCOUNTERS:
      return {
        ...state,
        [party]: [],
      };
    case DELETE_PARTY_ENCOUNTERS:
      return {
        ...omit(state, party),
      };
    case ADD_ENCOUNTER:
      return {
        ...state,
        [party]: [
          ...state[party],
          action.payload.encounter,
        ],
      };
    case REMOVE_ENCOUNTER: {
      const newParty = [...state[party]];
      newParty.splice(action.payload.encounter, 1);
      return {
        ...state,
        [party]: newParty,
      };
    }
    default:
      return state;
  }
};

export default reducer;
