import { ADD_PARTY } from 'state/parties/types';

const defaultState = {
  list: [],
  parties: {},
  currentParty: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PARTY:
      return {
        ...state,
        list: [...state.list, action.payload.name],
        parties: {
          ...state.parties,
          [action.payload.name]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
