import { connect } from 'react-redux';

import { getCurrentPartySavedEncounters } from 'state/saved-encounters/selectors';
import SavedEncountersList from 'ui/saved-encounters/SavedEncountersList';

const mapStateToProps = state => ({
  encounters: getCurrentPartySavedEncounters(state),
});

export default connect(
  mapStateToProps,
  null,
)(SavedEncountersList);
