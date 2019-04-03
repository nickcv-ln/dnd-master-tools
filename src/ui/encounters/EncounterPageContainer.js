import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { addEncounter } from 'state/saved-encounters/actions';
import {
  getPartyThresholds,
  getSelectedPartyName,
} from 'state/parties/selectors';
import { getEncounterValue, getCurrentPartyEncounter } from 'state/encounters/selectors';
import EncounterPage from 'ui/encounters/EncounterPage';

const mapStateToProps = state => ({
  thresholds: getPartyThresholds(state),
  encounterValue: getEncounterValue(state),
  encounter: getCurrentPartyEncounter(state),
  party: getSelectedPartyName(state),
});

const mapDispatchToProps = dispatch => ({
  save: (party, encounter) => {
    dispatch(addEncounter(party, encounter));
    toast.success('encounter saved');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncounterPage);
