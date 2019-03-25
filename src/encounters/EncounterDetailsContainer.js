import { connect } from 'react-redux';

import { getCurrentPartyEncounter } from 'state/encounters/selectors';
import { getSelectedPartyName } from 'state/parties/selectors';
import {
  addMonster,
  removeMonster,
  increaseMonsterCount,
  decreaseMonsterCount,
} from 'state/encounters/actions';
import EncounterDetails from 'encounters/EncounterDetails';

const mapStateToProps = state => (
  {
    encounter: getCurrentPartyEncounter(state),
    party: getSelectedPartyName(state),
  }
);

const mapDispatchToProps = dispatch => ({
  addMonster: (party, monster) => dispatch(addMonster(
    party,
    monster,
  )),
  removeMonster: (party, monster) => dispatch(removeMonster(
    party,
    monster,
  )),
  increaseMonsterCount: (party, monster) => dispatch(increaseMonsterCount(
    party,
    monster,
  )),
  decreaseMonsterCount: (party, monster) => dispatch(decreaseMonsterCount(
    party,
    monster,
  )),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncounterDetails);
