import {
  getSortedInitiatives,
  rollEncounterInitiatives,
  generatePartyDefaultInitiatives,
} from 'utils/initiatives';

describe('utils initiatives', () => {
  describe('getSortedInitiatives', () => {
    it('returns the initiatives in the correct order', () => {
      const result = getSortedInitiatives({
        mob: { value: 12 },
        fast: { value: 15 },
        slow: { value: 1 },
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
        mob: { value: 12 },
        fast: { value: 12.4 },
      });

      expect(result).toHaveLength(2);
      expect(result).toHaveProperty('0.name', 'fast');
      expect(result).toHaveProperty('0.value', 12.4);
      expect(result).toHaveProperty('0.display', 12);
      expect(result).toHaveProperty('1.name', 'mob');
      expect(result).toHaveProperty('1.value', 12);
      expect(result).toHaveProperty('1.display', 12);
    });

    it('carries over the `isPartyMember` property', () => {
      const result = getSortedInitiatives({
        mob: { value: 12, isPartyMember: true },
        fast: { value: 15, isPartyMember: false },
      });

      expect(result).toHaveLength(2);
      expect(result).toHaveProperty('0.name', 'fast');
      expect(result).toHaveProperty('0.isPartyMember', false);
      expect(result).toHaveProperty('1.name', 'mob');
      expect(result).toHaveProperty('1.isPartyMember', true);
    });

    it('returns whether or not there are collusions in values', () => {
      const result = getSortedInitiatives({
        mob: { value: 12 },
        mob2: { value: 12 },
        fast: { value: 12.4 },
      });

      expect(result).toHaveLength(3);
      expect(result).toHaveProperty('0.name', 'fast');
      expect(result).toHaveProperty('0.value', 12.4);
      expect(result).toHaveProperty('0.hasCollusions', false);
      expect(result).toHaveProperty('1.name', 'mob');
      expect(result).toHaveProperty('1.value', 12);
      expect(result).toHaveProperty('1.hasCollusions', true);
      expect(result).toHaveProperty('2.name', 'mob2');
      expect(result).toHaveProperty('2.value', 12);
      expect(result).toHaveProperty('2.hasCollusions', true);
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

  describe('generatePartyDefaultInitiatives', () => {
    it('returns the initiatives for the given party members', () => {
      const result = generatePartyDefaultInitiatives({
        firstMember: {},
        secondMember: {},
      });

      expect(Object.keys(result)).toHaveLength(2);
      expect(result).toHaveProperty('firstMember', 0);
      expect(result).toHaveProperty('secondMember', 0);
    });
  });
});
