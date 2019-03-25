import {
  getParties,
  getSelectedPartyName,
  getSelectedParty,
  isPartySelected,
  doPartiesExist,
  getPartyList,
  getParty,
  getPartyThresholds,
} from 'state/parties/selectors';

const state = {
  parties: {
    list: [
      'myParty',
      'myParty2',
    ],
    parties: {
      myParty: {
        name: 'myParty',
        members: {
          ciao: {
            level: 3,
          },
        },
      },
      myParty2: {
        name: 'myParty2',
        members: {},
      },
    },
    currentParty: 'myParty',
  },
};

describe('state/parties selectors', () => {
  describe('getParties', () => {
    it('returns the entire parties state', () => {
      expect(getParties(state)).toBe(state.parties);
    });
  });

  describe('getSelectedPartyName', () => {
    it('returns the selected party name', () => {
      expect(getSelectedPartyName(state)).toBe(state.parties.currentParty);
    });
  });

  describe('getSelectedParty', () => {
    it('returns the entire party object', () => {
      expect(getSelectedParty(state)).toBe(state.parties.parties.myParty);
    });
  });

  describe('isPartySelected', () => {
    it('returns true if a party is selected', () => {
      expect(isPartySelected(state)).toBe(true);
    });

    it('returns false if a party is selected', () => {
      expect(isPartySelected({
        parties: {
          ...state.parties,
          currentParty: null,
        },
      })).toBe(false);
    });
  });

  describe('doPartiesExist', () => {
    it('returns true if any party exists', () => {
      expect(doPartiesExist(state)).toBe(true);
    });

    it('returns false if no party exists', () => {
      expect(doPartiesExist({
        parties: {
          ...state.parties,
          list: [],
        },
      })).toBe(false);
    });
  });

  describe('getPartyList', () => {
    it('returns all the parties', () => {
      expect(getPartyList(state)).toBe(state.parties.parties);
    });
  });

  describe('getParty', () => {
    it('returns the given existing party', () => {
      expect(getParty('myParty')(state)).toBe(state.parties.parties.myParty);
    });

    it('returns null if no party is found', () => {
      expect(getParty('myParty4')(state)).toBe(null);
    });
  });

  describe('getPartyThresholds', () => {
    it('returns the thresholds of the selected party', () => {
      expect(getPartyThresholds(state)).toEqual({
        deadly: 400,
        easy: 75,
        hard: 225,
        medium: 150,
      });
    });

    it('returns 0 thresholds if no party is selected', () => {
      expect(getPartyThresholds({
        parties: {
          ...state.parties,
          currentParty: null,
        },
      })).toEqual({
        deadly: 0,
        easy: 0,
        hard: 0,
        medium: 0,
      });
    });

    it('returns 0 thresholds if the selected parties has no members', () => {
      expect(getPartyThresholds({
        parties: {
          ...state.parties,
          currentParty: 'myParty2',
        },
      })).toEqual({
        deadly: 0,
        easy: 0,
        hard: 0,
        medium: 0,
      });
    });
  });
});
