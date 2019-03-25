import reducer from 'state/saved-encounters/reducer';
import {
  createPartyEncounters,
  deletePartyEncounters,
  addEncounter,
  removeEncounter,
} from 'state/saved-encounters/actions';

const encounter = {
  Zombie: {
    challenge: 2,
    experience: 50,
    name: 'Zombie',
    number: 2,
  },
};

describe('state/saved-encounters reducer', () => {
  let state;

  beforeAll(() => {
    state = reducer();
  });

  it('creates a default state', () => {
    expect(state).toEqual({});
  });

  describe('after the createPartyEncounters action', () => {
    it('creates the party blank encounters', () => {
      state = reducer(state, createPartyEncounters({ party: 'myParty' }));
      expect(state).toHaveProperty('myParty', []);
    });

    describe('after the addEncounter action', () => {
      it('adds the new encounter to the array', () => {
        state = reducer(state, addEncounter('myParty', encounter));
        expect(state.myParty).toHaveLength(1);
        expect(state).toHaveProperty('myParty.0', encounter);
      });

      describe('after the removeEncounter action', () => {
        beforeAll(() => {
          state = reducer(state, addEncounter('myParty', encounter));
          state = reducer(state, addEncounter('myParty', { ...encounter, Zombie: { number: 4 } }));
          state = reducer(state, addEncounter('myParty', encounter));
        });

        it('removes the given encounter from the party', () => {
          expect(state.myParty).toHaveLength(4);
          expect(state).toHaveProperty('myParty.2.Zombie.number', 4);
          state = reducer(state, removeEncounter('myParty', 2));
          expect(state.myParty).toHaveLength(3);
          expect(state).toHaveProperty('myParty.2.Zombie.number', 2);
        });
      });
    });

    describe('after the deletePartyEncounters action', () => {
      it('removes the party and all its encounters', () => {
        state = reducer(state, deletePartyEncounters({ party: 'myParty' }));
        expect(state).not.toHaveProperty('myParty');
      });
    });
  });
});
