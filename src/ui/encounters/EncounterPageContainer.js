import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getPartyThresholds,
} from 'state/parties/selectors';
import { getEncounterValue } from 'state/encounters/selectors';
import EncounterPage from 'ui/encounters/EncounterPage';

const mapStateToProps = state => ({
  thresholds: getPartyThresholds(state),
  encounterValue: getEncounterValue(state),
});

const mapDispatchToProps = () => ({
  save: () => toast.success('feature under development'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncounterPage);
