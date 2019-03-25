import {
  getEncounters,
  getCurrentPartyEncounter,
  getEncounterValue,
} from 'state/encounters/selectors';

const state = {
  encounters: {
    myParty: {
      Zombie: {
        name: 'Zombie',
        number: 2,
        challenge: 2,
        experience: 40,
      },
    },
  },
  parties: {
    currentParty: 'myParty',
  },
};

describe('state/encounters selectors', () => {
  describe('getEncounters', () => {
    it('returns the whole encounter state', () => {
      expect(getEncounters(state)).toBe(state.encounters);
    });
  });

  describe('getCurrentPartyEncounter', () => {
    it('returns the current party encounter', () => {
      expect(getCurrentPartyEncounter(state)).toBe(state.encounters.myParty);
    });
  });

  describe('getEncounterValue', () => {
    it('returns the value for the current encounter', () => {
      expect(getEncounterValue(state)).toBe(120);
    });
  });
});
