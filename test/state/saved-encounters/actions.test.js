import {
  createPartyEncounters,
  deletePartyEncounters,
  addEncounter,
  removeEncounter,
  selectEncounter,
} from 'state/saved-encounters/actions';
import {
  ADD_ENCOUNTER,
  REMOVE_ENCOUNTER,
  CREATE_PARTY_ENCOUNTERS,
  DELETE_PARTY_ENCOUNTERS,
  SELECT_ENCOUNTER,
} from 'state/saved-encounters/types';

describe('state/saved-encounters actions', () => {
  describe('createPartyEncounters', () => {
    it('returns the proper action', () => {
      const action = createPartyEncounters('myParty');
      expect(action).toHaveProperty('type', CREATE_PARTY_ENCOUNTERS);
      expect(action).toHaveProperty('payload', 'myParty');
    });
  });

  describe('deletePartyEncounters', () => {
    it('returns the proper action', () => {
      const action = deletePartyEncounters('myParty');
      expect(action).toHaveProperty('type', DELETE_PARTY_ENCOUNTERS);
      expect(action).toHaveProperty('payload', 'myParty');
    });
  });

  describe('addEncounter', () => {
    it('returns the proper action', () => {
      const encounter = {
        monster1: {
          name: 'mob',
        },
      };

      const action = addEncounter('myParty', encounter);
      expect(action).toHaveProperty('type', ADD_ENCOUNTER);
      expect(action).toHaveProperty('payload', expect.any(Object));
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.encounter', encounter);
    });
  });

  describe('removeEncounter', () => {
    it('returns the proper action', () => {
      const encounter = {
        monster1: {
          name: 'mob',
        },
      };

      const action = removeEncounter('myParty', encounter);
      expect(action).toHaveProperty('type', REMOVE_ENCOUNTER);
      expect(action).toHaveProperty('payload', expect.any(Object));
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.encounter', encounter);
    });
  });

  describe('selectEncounter', () => {
    it('returns the proper action', () => {
      const action = selectEncounter('myParty', 1);
      expect(action).toHaveProperty('type', SELECT_ENCOUNTER);
      expect(action).toHaveProperty('payload', expect.any(Object));
      expect(action).toHaveProperty('payload.party', 'myParty');
      expect(action).toHaveProperty('payload.encounter', 1);
    });
  });
});
