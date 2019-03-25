import {
  getChallengeForThreshold,
  getPartyThresholds,
  getEncounterValue,
} from 'utils/thresholds';

describe('tresholds', () => {
  describe('getChallengeForThreshold', () => {
    it('returns the challenge matching exactly the given threshold (xp value)', () => {
      expect(getChallengeForThreshold(50)).toBe(0.25);
    });

    it('returns 0 if no challenge perfectly matches a given threshold', () => {
      expect(getChallengeForThreshold(51)).toBe(0);
    });

    it('returns the closest lower value if `matchLower` is true', () => {
      expect(getChallengeForThreshold(51, true)).toBe(0.25);
    });

    it('returns the closest higher value if `matchHigher` is true', () => {
      expect(getChallengeForThreshold(51, false, true)).toBe(0.5);
    });
  });

  describe('getPartyThresholds', () => {
    it('returns the thresholds calculated with the total party members levels', () => {
      expect(getPartyThresholds({
        members: {
          Matt: { level: 2 },
          Nic: { level: 1 },
        },
      })).toEqual({
        deadly: 300,
        easy: 75,
        hard: 225,
        medium: 150,
      });
    });

    it('skips party member with no level', () => {
      expect(getPartyThresholds({
        members: {
          Matt: {},
          Nic: { level: 1 },
        },
      })).toEqual({
        deadly: 100,
        easy: 25,
        hard: 75,
        medium: 50,
      });
    });

    it('counts the member as level 1 if it is below 1', () => {
      expect(getPartyThresholds({
        members: {
          Nic: { level: -1 },
        },
      })).toEqual({
        deadly: 100,
        easy: 25,
        hard: 75,
        medium: 50,
      });
    });

    it('counts the member as level 20 if it is above 20', () => {
      expect(getPartyThresholds({
        members: {
          Nic: { level: 21 },
        },
      })).toEqual({
        deadly: 12700,
        easy: 2800,
        hard: 8500,
        medium: 5700,
      });
    });

    it('skips the calculation if the party object is not well formatted', () => {
      expect(getPartyThresholds(false)).toEqual({
        deadly: 0,
        easy: 0,
        hard: 0,
        medium: 0,
      });
    });
  });

  describe('getEncounterValue', () => {
    it('returns the total challenge value for the given encounter', () => {
      expect(getEncounterValue({
        Zombie: {
          experience: 200,
          number: 2,
        },
      })).toBe(600);
    });

    it('returns NaN if either value is missing', () => {
      expect(getEncounterValue({
        Zombie: {
          number: 2,
        },
      })).toEqual(NaN);
    });
  });
});
