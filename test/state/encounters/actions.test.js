import {
  createEncounter,
  addMonster,
  removeMonster,
  increaseMonsterCount,
  decreaseMonsterCount,
} from 'state/encounters/actions';
import {
  CREATE_ENCOUNTER,
  ADD_MONSTER,
  REMOVE_MONSTER,
  INCREASE_MONSTER_COUNT,
  DECREASE_MONSTER_COUNT,
} from 'state/encounters/types';

describe('state/encounters actions', () => {
  describe('createEncounter', () => {
    it('returns the proper action', () => {
      const action = createEncounter('myEncounter');
      expect(action).toHaveProperty('type', CREATE_ENCOUNTER);
      expect(action).toHaveProperty('payload', 'myEncounter');
    });
  });

  describe('addMonster', () => {
    it('returns the proper action', () => {
      const monster = {
        name: 'Zombie',
      };
      const action = addMonster('myParty', monster);
      expect(action).toHaveProperty('type', ADD_MONSTER);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.monster', monster);
    });
  });

  describe('removeMonster', () => {
    it('returns the proper action', () => {
      const action = removeMonster('myParty', 'Zombie');
      expect(action).toHaveProperty('type', REMOVE_MONSTER);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.monsterName', 'Zombie');
    });
  });

  describe('increaseMonsterCount', () => {
    it('returns the proper action', () => {
      const action = increaseMonsterCount('myParty', 'Zombie');
      expect(action).toHaveProperty('type', INCREASE_MONSTER_COUNT);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.monsterName', 'Zombie');
    });
  });

  describe('decreaseMonsterCount', () => {
    it('returns the proper action', () => {
      const action = decreaseMonsterCount('myParty', 'Zombie');
      expect(action).toHaveProperty('type', DECREASE_MONSTER_COUNT);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.monsterName', 'Zombie');
    });
  });
});
