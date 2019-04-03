import {
  getSavedEncounters,
  getCurrentPartySavedEncounters,
} from 'state/saved-encounters/selectors';

const state = {
  savedEncounters: {
    myParty: [
      {
        Zombie: {
          number: 2,
        },
      },
    ],
  },
  parties: {
    currentParty: 'myParty',
  },
};

describe('saved-encounters selectors', () => {
  describe('getSavedEncounters', () => {
    it('returns the full list of saved encounters', () => {
      expect(getSavedEncounters(state)).toBe(state.savedEncounters);
    });
  });

  describe('getCurrentPartySavedEncounters', () => {
    it('returns the current party saved encounters', () => {
      expect(getCurrentPartySavedEncounters(state)).toBe(state.savedEncounters.myParty);
    });

    it('returns null if no party is selected', () => {
      expect(getCurrentPartySavedEncounters({
        ...state,
        parties: {
          currentParty: null,
        },
      })).toBe(null);
    });

    it('returns null if the currentParty does not exist in the saved encounters state', () => {
      expect(getCurrentPartySavedEncounters({
        ...state,
        parties: {
          currentParty: 'myParty2',
        },
      })).toBe(null);
    });
  });
});
