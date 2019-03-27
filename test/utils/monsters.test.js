import { filter } from 'utils/monsters';

describe('utils monsters', () => {
  describe('filter', () => {
    it('returns null if the monster is below the minChallenge', () => {
      expect(filter({
        challenge: 10,
      }, 20)).toBe(null);
    });

    it('returns null if the monster is above the maxChallenge', () => {
      expect(filter({
        challenge: 30,
      }, 20, 25)).toBe(null);
    });

    it('returns null if the monster name does not match the search filter', () => {
      expect(filter({
        challenge: 22,
        name: 'Zombie',
      }, 20, 25, 'da')).toBe(null);
    });

    it('returns the monster if it is above the minChallenge', () => {
      const monster = {
        challenge: 22,
        name: 'Zombie',
      };
      expect(filter(monster, 20)).toBe(monster);
    });

    it('returns the monster if it is below the maxChallenge', () => {
      const monster = {
        challenge: 22,
        name: 'Zombie',
      };
      expect(filter(monster, 20, 30)).toBe(monster);
    });

    it('returns the monster if its name matches the search filter', () => {
      const monster = {
        challenge: 22,
        name: 'Zombie',
      };
      expect(filter(monster, 20, 30, 'bi')).toBe(monster);
    });

    it('returns the monster even if the filter does not match the case', () => {
      const monster = {
        challenge: 22,
        name: 'Zombie',
      };
      expect(filter(monster, 20, 30, 'zOM')).toBe(monster);
    });
  });
});
