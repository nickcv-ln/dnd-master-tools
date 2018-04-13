import { connect } from 'react-redux';

import { getCurrentPartyEncounter } from 'state/encounters/selectors';
import { getSelectedPartyName } from 'state/parties/selectors';
import { addMonster, removeMonster } from 'state/encounters/actions';
import EncounterDetails from 'encounters/EncounterDetails';

const mapStateToProps = state => (
  {
    encounter: getCurrentPartyEncounter(state),
    party: getSelectedPartyName(state),
  }
);

const mapDispatchToProps = dispatch => ({
  addMonster: (party, monster) => dispatch(addMonster({
    party,
    ...monster,
  })),
  removeMonster: (party, monster) => dispatch(removeMonster({
    party,
    monster,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncounterDetails);
