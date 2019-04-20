import { connect } from 'react-redux';

import {
  getCurrentPartySelectedEncounter,
} from 'state/saved-encounters/selectors';
import { getSelectedPartyName } from 'state/parties/selectors';
import { setInitiative, clearInitiative } from 'state/saved-encounters/actions';
import EncounterDetails from 'ui/saved-encounters/EncounterDetails';

const mapStateToProps = state => ({
  encounter: getCurrentPartySelectedEncounter(state),
  party: getSelectedPartyName(state),
});

const mapDispatchToProps = dispatch => ({
  setInitiative: (party, initiatives) => {
    dispatch(clearInitiative(party));
    dispatch(setInitiative(party, initiatives));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncounterDetails);
