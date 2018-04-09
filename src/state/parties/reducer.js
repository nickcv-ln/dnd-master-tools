import omit from 'object.omit';
import {
  ADD_PARTY,
  SELECT_PARTY,
  ADD_MEMBER,
  REMOVE_MEMBER,
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
    },
  },
});

const removeMember = (state, payload) => ({
  ...state,
  members: {
    ...omit(state.members, payload.member),
  },
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PARTY:
      return {
        ...state,
        list: [...state.list, action.payload.name],
        parties: {
          ...state.parties,
          [action.payload.name]: {
            ...action.payload,
            members: {},
          },
        },
      };
    case SELECT_PARTY:
      return {
        ...state,
        currentParty: action.payload,
      };
    case ADD_MEMBER:
      return {
        ...state,
        parties: {
          ...state.parties,
          [action.payload.party]: addMember(state.parties[action.payload.party], action.payload),
        },
      };
    case REMOVE_MEMBER:
      return {
        ...state,
        parties: {
          ...state.parties,
          [action.payload.party]: removeMember(state.parties[action.payload.party], action.payload),
        },
      };
    default:
      return state;
  }
};

export default reducer;
