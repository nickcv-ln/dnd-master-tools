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
      ...payload,
      level: payload.level || 1,
      ac: payload.ac || 10,
    },
  },
});

const changeLevel = (state, memberName, increase = true) => {
  const currentLevel = parseInt(state.members[memberName].level, 10);
  return {
    ...state,
    members: {
      ...state.members,
      [memberName]: {
        ...state.members[memberName],
        level: increase ? currentLevel + 1 : currentLevel - 1,
      },
    },
  };
};

const removeMember = (state, memberName) => ({
  ...state,
  members: {
    ...omit(state.members, memberName),
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
        [action.payload.party]: addMember(state[action.payload.party], action.payload.member),
      };
    case REMOVE_MEMBER: {
      const { party, memberName } = action.payload;
      return {
        ...state,
        [party]: removeMember(state[party], memberName),
      };
    }
    case INCREASE_LEVEL: {
      const { party, memberName } = action.payload;
      return {
        ...state,
        [party]: changeLevel(state[party], memberName),
      };
    }
    case DECREASE_LEVEL: {
      const { party, memberName } = action.payload;
      return {
        ...state,
        [party]: changeLevel(state[party], memberName, false),
      };
    }
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
