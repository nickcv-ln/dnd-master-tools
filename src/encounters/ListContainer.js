import { connect } from 'react-redux';

import {
  isPartySelected,
  doPartiesExist,
  getSelectedParty,
  getPartyThresholds,
} from 'state/parties/selectors';
import { getEncounterValue } from 'state/encounters/selectors';
import List from 'encounters/List';

const mapStateToProps = state => (
  {
    isPartySelected: isPartySelected(state),
    doPartiesExist: doPartiesExist(state),
    selectedParty: getSelectedParty(state),
    thresholds: getPartyThresholds(state),
    encounterValue: getEncounterValue(state),
  }
);

export default connect(
  mapStateToProps,
  null,
)(List);