import {
  ADD_PARTY,
  SELECT_PARTY,
  ADD_MEMBER,
  REMOVE_MEMBER,
  INCREASE_LEVEL,
  DECREASE_LEVEL,
} from 'state/parties/types';
import { push } from 'react-router-redux';

export const addParty = party => ({
  type: ADD_PARTY,
  payload: party,
});

export const selectParty = party => ({
  type: SELECT_PARTY,
  payload: party,
});

export const addMember = member => ({
  type: ADD_MEMBER,
  payload: member,
});

export const removeMember = member => ({
  type: REMOVE_MEMBER,
  payload: member,
});

export const increaseLevel = member => ({
  type: INCREASE_LEVEL,
  payload: member,
});

export const decreaseLevel = member => ({
  type: DECREASE_LEVEL,
  payload: member,
});

// thunks

export const createParty = party => (dispatch) => {
  dispatch(addParty(party));
  dispatch(selectParty(party.name));
  dispatch(push(`/parties/view/${party.name}`));
};
