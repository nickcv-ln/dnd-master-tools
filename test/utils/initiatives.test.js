import {
  getSortedInitiatives,
  rollEncounterInitiatives,
} from 'utils/initiatives';

describe('utils initiatives', () => {
  describe('getSortedInitiatives', () => {
    it('returns the initiatives in the correct order', () => {
      const result = getSortedInitiatives({
        mob: 12,
        fast: 15,
        slow: 1,
      });

      expect(result).toHaveLength(3);
      expect(result).toHaveProperty('0.name', 'fast');
      expect(result).toHaveProperty('0.value', 15);
      expect(result).toHaveProperty('0.display', 15);
      expect(result).toHaveProperty('1.name', 'mob');
      expect(result).toHaveProperty('1.value', 12);
      expect(result).toHaveProperty('1.display', 12);
      expect(result).toHaveProperty('2.name', 'slow');
      expect(result).toHaveProperty('2.value', 1);
      expect(result).toHaveProperty('2.display', 1);
    });

    it('rounds down the display value to the closest integer', () => {
      const result = getSortedInitiatives({
        mob: 12,
        fast: 12.4,
      });

      expect(result).toHaveLength(2);
      expect(result).toHaveProperty('0.name', 'fast');
      expect(result).toHaveProperty('0.value', 12.4);
      expect(result).toHaveProperty('0.display', 12);
      expect(result).toHaveProperty('1.name', 'mob');
      expect(result).toHaveProperty('1.value', 12);
      expect(result).toHaveProperty('1.display', 12);
    });
  });

  describe('rollEncounterInitiatives', () => {
    it('returns the rolled initiatives for the given encounter', () => {
      const result = rollEncounterInitiatives({
        mob: {
          initiative: 2,
        },
        mob2: {},
      });

      expect(Object.keys(result)).toHaveLength(2);
      expect(result).toHaveProperty('mob', expect.any(Number));
      expect(result).toHaveProperty('mob2', expect.any(Number));
    });
  });
});
