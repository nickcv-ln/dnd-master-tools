import {
  ADD_PARTY,
  SELECT_PARTY,
  ADD_MEMBER,
  REMOVE_MEMBER,
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

// thunks

export const createParty = party => (dispatch) => {
  dispatch(addParty(party));
  dispatch(selectParty(party.name));
  dispatch(push(`/parties/view/${party.name}`));
};
