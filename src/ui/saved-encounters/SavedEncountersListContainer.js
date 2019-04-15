import { connect } from 'react-redux';

import { getCurrentPartySavedEncounters } from 'state/saved-encounters/selectors';
import { getSelectedPartyName } from 'state/parties/selectors';
import { selectEncounter } from 'state/saved-encounters/actions';
import SavedEncountersList from 'ui/saved-encounters/SavedEncountersList';

const mapStateToProps = state => ({
  encounters: getCurrentPartySavedEncounters(state),
  party: getSelectedPartyName(state),
});

const mapDispatchToProps = dispatch => ({
  select: (party, id) => dispatch(selectEncounter(party, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedEncountersList);
