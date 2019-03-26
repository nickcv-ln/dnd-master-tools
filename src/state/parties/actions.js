import {
  ADD_PARTY,
  SELECT_PARTY,
  ADD_MEMBER,
  REMOVE_MEMBER,
  INCREASE_LEVEL,
  DECREASE_LEVEL,
} from 'state/parties/types';
import history from 'utils/history';

export const addParty = party => ({
  type: ADD_PARTY,
  payload: party,
});

export const selectParty = party => ({
  type: SELECT_PARTY,
  payload: party,
});

export const addMember = (party, member) => ({
  type: ADD_MEMBER,
  payload: {
    party,
    member,
  },
});

export const removeMember = (party, memberName) => ({
  type: REMOVE_MEMBER,
  payload: {
    party,
    memberName,
  },
});

export const increaseLevel = (party, memberName) => ({
  type: INCREASE_LEVEL,
  payload: {
    party,
    memberName,
  },
});

export const decreaseLevel = (party, memberName) => ({
  type: DECREASE_LEVEL,
  payload: {
    party,
    memberName,
  },
});

// thunks

export const createParty = party => (dispatch) => {
  dispatch(addParty(party));
  dispatch(selectParty(party));
  history.push(`/parties/view/${party}`);
};
