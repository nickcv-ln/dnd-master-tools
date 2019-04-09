import reducer from 'state/saved-encounters/reducer';
import {
  createPartyEncounters,
  deletePartyEncounters,
  addEncounter,
  removeEncounter,
  selectEncounter,
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
      expect(state).toHaveProperty('myParty');
      expect(state).toHaveProperty('myParty.selectedEncounter', null);
      expect(state).toHaveProperty('myParty.encounters', []);
    });

    describe('after the addEncounter action', () => {
      it('adds the new encounter to the array', () => {
        state = reducer(state, addEncounter('myParty', encounter));
        expect(state.myParty.encounters).toHaveLength(1);
        expect(state).toHaveProperty('myParty.encounters.0', encounter);
        expect(state).toHaveProperty('myParty.selectedEncounter', null);
      });

      describe('after the selectEncounter action', () => {
        it('sets the given encounter as the selected one', () => {
          state = reducer(state, selectEncounter('myParty', 0));
          expect(state.myParty.encounters).toHaveLength(1);
          expect(state).toHaveProperty('myParty.selectedEncounter', 0);
        });
      });

      describe('after the removeEncounter action', () => {
        beforeAll(() => {
          state = reducer(state, addEncounter('myParty', encounter));
          state = reducer(state, addEncounter('myParty', { ...encounter, Zombie: { number: 4 } }));
          state = reducer(state, addEncounter('myParty', encounter));
        });

        it('removes the given encounter from the party', () => {
          expect(state.myParty.encounters).toHaveLength(4);
          expect(state).toHaveProperty('myParty.encounters.2.Zombie.number', 4);
          expect(state).toHaveProperty('myParty.selectedEncounter', 0);
          state = reducer(state, removeEncounter('myParty', 2));
          expect(state.myParty.encounters).toHaveLength(3);
          expect(state).toHaveProperty('myParty.encounters.2.Zombie.number', 2);
          expect(state).toHaveProperty('myParty.selectedEncounter', 0);
        });

        it('deselects the encounter if it is the one deleted', () => {
          expect(state.myParty.encounters).toHaveLength(3);
          expect(state).toHaveProperty('myParty.selectedEncounter', 0);
          state = reducer(state, removeEncounter('myParty', 0));
          expect(state.myParty.encounters).toHaveLength(2);
          expect(state).toHaveProperty('myParty.selectedEncounter', null);
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
