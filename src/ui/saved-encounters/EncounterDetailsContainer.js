import { connect } from 'react-redux';

import { getCurrentPartySelectedEncounter } from 'state/saved-encounters/selectors';
import EncounterDetails from 'ui/saved-encounters/EncounterDetails';

const mapStateToProps = state => ({
  encounter: getCurrentPartySelectedEncounter(state),
});

export default connect(
  mapStateToProps,
  null,
)(EncounterDetails);
