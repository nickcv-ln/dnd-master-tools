import { createSelector } from 'reselect';
import { getSelectedPartyName } from 'state/parties/selectors';

export const getSavedEncounters = state => state.savedEncounters;

export const getcurrentPartySelectedEncounterId = createSelector(
  getSavedEncounters,
  getSelectedPartyName,
  (encounters, party) => {
    if (!encounters[party]) {
      return null;
    }

    return encounters[party].selectedEncounter;
  },
);

export const getcurrentPartyInitiatives = createSelector(
  getSavedEncounters,
  getSelectedPartyName,
  (encounters, party) => {
    if (!encounters[party]) {
      return null;
    }

    return encounters[party].initiatives;
  },
);

export const getCurrentPartySavedEncounters = createSelector(
  getSavedEncounters,
  getSelectedPartyName,
  (encounters, party) => {
    if (!encounters[party]) {
      return null;
    }

    return encounters[party].encounters;
  },
);

export const getCurrentPartySelectedEncounter = createSelector(
  getSavedEncounters,
  getSelectedPartyName,
  getcurrentPartySelectedEncounterId,
  (encounters, party, encounterId) => {
    if (!encounters[party] || encounterId === null) {
      return null;
    }

    return encounters[party].encounters[encounterId] || null;
  },
);
