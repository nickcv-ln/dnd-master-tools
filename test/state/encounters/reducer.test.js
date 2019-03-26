import reducer from 'state/encounters/reducer';
import {
  createEncounter,
  addMonster,
  removeMonster,
  increaseMonsterCount,
  decreaseMonsterCount,
} from 'state/encounters/actions';

describe('state/encounters reducer', () => {
  let state;

  beforeAll(() => {
    state = reducer();
  });

  it('generates the default state', () => {
    expect(state).toEqual({});
  });

  describe('after the createEncounter action', () => {
    it('creates the empty party encounter', () => {
      state = reducer(state, createEncounter({ party: 'myParty' }));
      expect(state).toHaveProperty('myParty', {});
    });

    describe('after the addMonster action', () => {
      it('adds the monster if it was not in the party encounter', () => {
        const monster = {
          name: 'Zombie',
        };
        state = reducer(state, addMonster('myParty', monster));
        expect(Object.keys(state.myParty)).toHaveLength(1);
        expect(state.myParty).toHaveProperty('Zombie');
        expect(state.myParty).toHaveProperty('Zombie.number', 1);
      });

      it('increases the monster number if it was already present in the encounter', () => {
        const monster = {
          name: 'Zombie',
        };
        state = reducer(state, addMonster('myParty', monster));
        expect(Object.keys(state.myParty)).toHaveLength(1);
        expect(state.myParty).toHaveProperty('Zombie');
        expect(state.myParty).toHaveProperty('Zombie.number', 2);
      });

      describe('after the removeMonster action', () => {
        beforeAll(() => {
          state = reducer(state, addMonster('myParty', { name: 'Roc' }));
        });

        it('does not remove any monster if the name does not match', () => {
          state = reducer(state, removeMonster('myParty', 'Ros'));
          expect(Object.keys(state.myParty)).toHaveLength(2);
          expect(state.myParty).toHaveProperty('Roc');
        });

        it('removes the monster if the name does match', () => {
          state = reducer(state, removeMonster('myParty', 'Roc'));
          expect(Object.keys(state.myParty)).toHaveLength(1);
          expect(state.myParty).not.toHaveProperty('Roc');
        });
      });

      describe('after the increaseMonsterCount action', () => {
        it('does nothing if the monster name does not match any in the encounter', () => {
          state = reducer(state, increaseMonsterCount('myParty', 'Roc'));
          expect(Object.keys(state.myParty)).toHaveLength(1);
          expect(state.myParty).toHaveProperty('Zombie.number', 2);
        });

        it('increases the number of a matching monster', () => {
          state = reducer(state, increaseMonsterCount('myParty', 'Zombie'));
          expect(Object.keys(state.myParty)).toHaveLength(1);
          expect(state.myParty).toHaveProperty('Zombie.number', 3);
        });
      });

      describe('after the decreaseMonsterCount action', () => {
        it('does nothing if the monster name does not match any in the encounter', () => {
          state = reducer(state, decreaseMonsterCount('myParty', 'Roc'));
          expect(Object.keys(state.myParty)).toHaveLength(1);
          expect(state.myParty).toHaveProperty('Zombie.number', 3);
        });

        it('decreases the number of a matching monster', () => {
          state = reducer(state, decreaseMonsterCount('myParty', 'Zombie'));
          expect(Object.keys(state.myParty)).toHaveLength(1);
          expect(state.myParty).toHaveProperty('Zombie.number', 2);
        });

        it('removes the monster if the number goes below 1', () => {
          state = reducer(state, decreaseMonsterCount('myParty', 'Zombie'));
          state = reducer(state, decreaseMonsterCount('myParty', 'Zombie'));
          expect(Object.keys(state.myParty)).toHaveLength(0);
          expect(state.myParty).not.toHaveProperty('Zombie');
        });
      });
    });
  });
});
