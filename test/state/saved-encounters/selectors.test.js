import {
  getSavedEncounters,
  getCurrentPartySavedEncounters,
  getcurrentPartySelectedEncounterId,
  getCurrentPartySelectedEncounter,
} from 'state/saved-encounters/selectors';

const state = {
  savedEncounters: {
    myParty: {
      selectedEncounter: 0,
      encounters: [
        {
          Zombie: {
            number: 2,
          },
        },
      ],
    },
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
      expect(getCurrentPartySavedEncounters(state)).toBe(state.savedEncounters.myParty.encounters);
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

  describe('getcurrentPartySelectedEncounterId', () => {
    it('returns the id of the selected encounter', () => {
      expect(getcurrentPartySelectedEncounterId(state)).toBe(0);
    });
  });

  describe('getCurrentPartySelectedEncounter', () => {
    it('returns the selected encounter', () => {
      expect(getCurrentPartySelectedEncounter(state)).toBe(
        state.savedEncounters.myParty.encounters[0],
      );
    });

    it('returns null if the currentParty does not exist in the saved encounters state', () => {
      expect(getCurrentPartySelectedEncounter({
        ...state,
        parties: {
          currentParty: 'myParty2',
        },
      })).toBe(null);
    });

    it('returns null if the selectedEncounter value is null', () => {
      expect(getCurrentPartySelectedEncounter({
        ...state,
        savedEncounters: {
          myParty: {
            ...state.savedEncounters.myParty,
            selectedEncounter: null,
          },
        },
      })).toBe(null);
    });

    it('returns null if the selectedEncounter does not exist', () => {
      expect(getCurrentPartySelectedEncounter({
        ...state,
        savedEncounters: {
          myParty: {
            ...state.savedEncounters.myParty,
            selectedEncounter: 12,
          },
        },
      })).toBe(null);
    });
  });
});
