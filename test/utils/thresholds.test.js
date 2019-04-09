import {
  getChallengeForThreshold,
  getPartyThresholds,
  getEncounterValue,
  getEncounterExp,
  normalizeChallenge,
  getValueColor,
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

  describe('getEncounterExp', () => {
    it('returns the total exp for the given encounter', () => {
      expect(getEncounterExp({
        Zombie: {
          experience: 200,
          number: 2,
        },
      })).toBe(400);
    });

    it('returns NaN if either value is missing', () => {
      expect(getEncounterExp({
        Zombie: {
          number: 2,
        },
      })).toEqual(NaN);
    });
  });

  describe('normalizeChallenge', () => {
    it('returns the normalized challenge value used for comparison', () => {
      expect(normalizeChallenge('0')).toBe(-1);
      expect(normalizeChallenge(0)).toBe(-1);
      expect(normalizeChallenge('1/8')).toBe(0.125);
      expect(normalizeChallenge('1/4')).toBe(0.25);
      expect(normalizeChallenge('1/2')).toBe(0.5);
      expect(normalizeChallenge(1)).toBe(1);
      expect(normalizeChallenge('1')).toBe(1);
      expect(normalizeChallenge('13')).toBe(13);
    });
  });

  describe('getValueColor', () => {
    it('returns colors relative to the given thresholds', () => {
      const thresholds = {
        deadly: 50,
        hard: 40,
        medium: 30,
        easy: 20,
      };
      expect(getValueColor(10, thresholds)).toBe('success');
      expect(getValueColor(20, thresholds)).toBe('success');
      expect(getValueColor(21, thresholds)).toBe('default');
      expect(getValueColor(30, thresholds)).toBe('warning');
      expect(getValueColor(31, thresholds)).toBe('warning');
      expect(getValueColor(40, thresholds)).toBe('danger');
      expect(getValueColor(41, thresholds)).toBe('danger');
      expect(getValueColor(50, thresholds)).toBe('danger');
      expect(getValueColor(51, thresholds)).toBe('dark');
      expect(getValueColor(80, thresholds)).toBe('dark');
    });

    it('can return a custom default color', () => {
      const thresholds = {
        deadly: 50,
        hard: 40,
        medium: 30,
        easy: 20,
      };
      expect(getValueColor(21, thresholds, 'light')).toBe('light');
    });

    it('returns the default if the threshold object is not well formatted', () => {
      expect(getValueColor(21, { easy: 30 })).toBe('success');
      expect(getValueColor(21, {})).toBe('default');
      expect(getValueColor(33, { easy: 30 })).toBe('default');
    });
  });
});
