import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addParty,
  selectParty,
  addMember,
  removeMember,
  increaseLevel,
  decreaseLevel,
  createParty,
} from 'state/parties/actions';
import {
  ADD_PARTY,
  SELECT_PARTY,
  ADD_MEMBER,
  REMOVE_MEMBER,
  INCREASE_LEVEL,
  DECREASE_LEVEL,
} from 'state/parties/types';

const middlewares = [thunk];
const store = configureMockStore(middlewares)();

describe('state/parties actions', () => {
  describe('addParty', () => {
    it('returns the proper action', () => {
      const action = addParty('myParty');
      expect(action).toHaveProperty('type', ADD_PARTY);
      expect(action).toHaveProperty('payload', 'myParty');
    });
  });

  describe('selectParty', () => {
    it('returns the proper action', () => {
      const action = selectParty('myParty');
      expect(action).toHaveProperty('type', SELECT_PARTY);
      expect(action).toHaveProperty('payload', 'myParty');
    });
  });

  describe('addMember', () => {
    it('returns the proper action', () => {
      const member = {
        name: 'Nic',
        level: 12,
        party: 'myParty',
      };
      const action = addMember('myParty', member);
      expect(action).toHaveProperty('type', ADD_MEMBER);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.member', member);
    });
  });

  describe('removeMember', () => {
    it('returns the proper action', () => {
      const action = removeMember('myParty', 'Nic');
      expect(action).toHaveProperty('type', REMOVE_MEMBER);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.memberName', 'Nic');
    });
  });

  describe('increaseLevel', () => {
    it('returns the proper action', () => {
      const action = increaseLevel('myParty', 'Nic');
      expect(action).toHaveProperty('type', INCREASE_LEVEL);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.memberName', 'Nic');
    });
  });

  describe('decreaseLevel', () => {
    it('returns the proper action', () => {
      const action = decreaseLevel('myParty', 'Nic');
      expect(action).toHaveProperty('type', DECREASE_LEVEL);
      expect(action).toHaveProperty('payload');
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.memberName', 'Nic');
    });
  });

  describe('createParty', () => {
    it('dispatches all the necessary actions', () => {
      store.dispatch(createParty('myParty'));
      const actions = store.getActions();
      expect(actions).toHaveLength(3);
      expect(actions[0]).toHaveProperty('type', ADD_PARTY);
      expect(actions[0]).toHaveProperty('payload', 'myParty');
      expect(actions[1]).toHaveProperty('type', SELECT_PARTY);
      expect(actions[1]).toHaveProperty('payload', 'myParty');
      expect(actions[2]).toHaveProperty('type', '@@router/CALL_HISTORY_METHOD');
    });
  });
});
