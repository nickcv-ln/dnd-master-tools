import reducer from 'state/parties/reducer';
import {
  addParty,
  selectParty,
  addMember,
  removeMember,
  increaseLevel,
  decreaseLevel,
} from 'state/parties/actions';

describe('state/parties reducer', () => {
  let state;

  beforeAll(() => {
    state = reducer();
  });

  it('returns a defalt state', () => {
    expect(state).toHaveProperty('list', []);
    expect(state).toHaveProperty('parties', {});
    expect(state).toHaveProperty('currentParty', null);
  });

  describe('after the addParty action', () => {
    beforeAll(() => {
      state = reducer(state, addParty('myParty'));
    });

    it('adds the party to the list', () => {
      expect(state.list).toHaveLength(1);
      expect(state.list).toHaveProperty('0', 'myParty');
    });

    it('adds the party to the parties object', () => {
      expect(Object.keys(state.parties)).toHaveLength(1);
      expect(state.parties).toHaveProperty('myParty');
      expect(state.parties).toHaveProperty('myParty.name', 'myParty');
      expect(state.parties).toHaveProperty('myParty.members', {});
    });

    describe('after the selectParty action', () => {
      it('sets the currentParty property', () => {
        state = reducer(state, selectParty('myParty'));
        expect(state).toHaveProperty('currentParty', 'myParty');
      });
    });

    describe('after the addMember action', () => {
      it('adds a member to the given party', () => {
        const member = {
          name: 'Nic',
          level: 22,
          ac: 18,
        };
        state = reducer(state, addMember('myParty', member));
        expect(Object.keys(state.parties.myParty.members)).toHaveLength(1);
        expect(state.parties.myParty.members).toHaveProperty(member.name, member);
      });

      it('adds a member with a default level and ac', () => {
        const member = {
          name: 'Matt',
        };
        state = reducer(state, addMember('myParty', member));
        expect(Object.keys(state.parties.myParty.members)).toHaveLength(2);
        expect(state.parties.myParty.members).toHaveProperty(member.name, {
          ...member,
          level: 1,
          ac: 10,
        });
      });

      it('updates the properties if a meber with that name exists', () => {
        const member = {
          name: 'Matt',
          level: 3,
          ac: 2,
        };
        state = reducer(state, addMember('myParty', member));
        expect(Object.keys(state.parties.myParty.members)).toHaveLength(2);
        expect(state.parties.myParty.members).toHaveProperty(member.name, member);
      });

      describe('after the removeMember action', () => {
        it('removes the member if there is one matching the name', () => {
          state = reducer(state, removeMember('myParty', 'Nic'));
          expect(Object.keys(state.parties.myParty.members)).toHaveLength(1);
          expect(state.parties.myParty.members).not.toHaveProperty('Nic');
        });

        it('does not remove members if none match', () => {
          state = reducer(state, removeMember('myParty', 'Matr'));
          expect(Object.keys(state.parties.myParty.members)).toHaveLength(1);
          expect(state.parties.myParty.members).toHaveProperty('Matt');
          expect(state.parties.myParty.members).not.toHaveProperty('Matr');
        });
      });

      describe('after the increaseLevel action', () => {
        it('increases the level of the given matching member', () => {
          state = reducer(state, increaseLevel('myParty', 'Matt'));
          expect(state.parties.myParty.members.Matt).toHaveProperty('level', 4);
        });

        it('does return the same level if the member does not exist', () => {
          state = reducer(state, increaseLevel('myParty', 'Nic'));
          expect(state.parties.myParty.members.Matt).toHaveProperty('level', 4);
          expect(state.parties.myParty.members).not.toHaveProperty('Nic');
        });
      });

      describe('after the decreaseLevel action', () => {
        it('decreases the level of the given matching member', () => {
          state = reducer(state, decreaseLevel('myParty', 'Matt'));
          expect(state.parties.myParty.members.Matt).toHaveProperty('level', 3);
        });

        it('does return the same level if the member does not exist', () => {
          state = reducer(state, decreaseLevel('myParty', 'Nic'));
          expect(state.parties.myParty.members.Matt).toHaveProperty('level', 3);
          expect(state.parties.myParty.members).not.toHaveProperty('Nic');
        });
      });
    });
  });
});
