import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  isPartySelected,
  doPartiesExist,
  getSelectedParty,
  getPartyThresholds,
} from 'state/parties/selectors';
import { getEncounterValue } from 'state/encounters/selectors';
import List from 'encounters/List';

const mapStateToProps = state => ({
  isPartySelected: isPartySelected(state),
  doPartiesExist: doPartiesExist(state),
  selectedParty: getSelectedParty(state),
  thresholds: getPartyThresholds(state),
  encounterValue: getEncounterValue(state),
});

const mapDispatchToProps = () => ({
  save: () => toast.success('feature under development'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
