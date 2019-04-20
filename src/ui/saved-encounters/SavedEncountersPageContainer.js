import { connect } from 'react-redux';

import { getCurrentPartySavedEncounters } from 'state/saved-encounters/selectors';
import { isPartySelected } from 'state/parties/selectors';
import SavedEncountersPage from 'ui/saved-encounters/SavedEncountersPage';

const mapStateToProps = state => ({
  isPartySelected: isPartySelected(state),
  encounters: getCurrentPartySavedEncounters(state),
});

export default connect(
  mapStateToProps,
  null,
)(SavedEncountersPage);
