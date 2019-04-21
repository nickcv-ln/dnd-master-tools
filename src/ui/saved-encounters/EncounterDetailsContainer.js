import { connect } from 'react-redux';

import {
  getCurrentPartySelectedEncounter,
} from 'state/saved-encounters/selectors';
import { getSelectedParty } from 'state/parties/selectors';
import { setInitiative, clearInitiative } from 'state/saved-encounters/actions';
import EncounterDetails from 'ui/saved-encounters/EncounterDetails';

const mapStateToProps = state => ({
  encounter: getCurrentPartySelectedEncounter(state),
  party: getSelectedParty(state),
});

const mapDispatchToProps = dispatch => ({
  setInitiative: (party, mobs, members) => {
    dispatch(clearInitiative(party));
    dispatch(setInitiative(party, mobs));
    dispatch(setInitiative(party, members, true));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncounterDetails);
