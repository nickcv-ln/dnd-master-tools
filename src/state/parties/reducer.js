import { combineReducers } from 'redux';
import omit from 'object.omit';
import {
  ADD_PARTY,
  SELECT_PARTY,
  ADD_MEMBER,
  REMOVE_MEMBER,
  INCREASE_LEVEL,
  DECREASE_LEVEL,
} from 'state/parties/types';

const defaultState = {
  list: [],
  parties: {},
  currentParty: null,
};

const addMember = (state, payload) => ({
  ...state,
  members: {
    ...state.members,
    [payload.name]: {
      ...omit(payload, 'party'),
      level: payload.level || 1,
      ac: payload.ac || 10,
    },
  },
});

const changeLevel = (state, payload, increase = true) => {
  const currentLevel = parseInt(state.members[payload.member].level, 10);
  return {
    ...state,
    members: {
      ...state.members,
      [payload.member]: {
        name: state.members[payload.member].name,
        level: increase ? currentLevel + 1 : currentLevel - 1,
      },
    },
  };
};

const removeMember = (state, payload) => ({
  ...state,
  members: {
    ...omit(state.members, payload.member),
  },
});

const list = (state = defaultState.list, action) => {
  switch (action.type) {
    case ADD_PARTY:
      return [...state, action.payload.name];
    default:
      return state;
  }
};

const currentParty = (state = defaultState.currentParty, action) => {
  switch (action.type) {
    case SELECT_PARTY:
      return action.payload;
    default:
      return state;
  }
};

const parties = (state = defaultState.parties, action) => {
  switch (action.type) {
    case ADD_PARTY:
      return {
        ...state,
        [action.payload.name]: {
          ...action.payload,
          members: {},
        },
      };
    case ADD_MEMBER:
      return {
        ...state,
        [action.payload.party]: addMember(state[action.payload.party], action.payload),
      };
    case REMOVE_MEMBER:
      return {
        ...state,
        [action.payload.party]: removeMember(state[action.payload.party], action.payload),
      };
    case INCREASE_LEVEL:
      return {
        ...state,
        [action.payload.party]: changeLevel(state[action.payload.party], action.payload),
      };
    case DECREASE_LEVEL:
      return {
        ...state,
        [action.payload.party]: changeLevel(state[action.payload.party], action.payload, false),
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  list,
  currentParty,
  parties,
});

export default reducer;
