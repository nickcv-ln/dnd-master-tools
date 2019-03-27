import { connect } from 'react-redux';

import {
  getPartyThresholds,
  getSelectedPartyName,
} from 'state/parties/selectors';
import MonstersSection from 'ui/encounters/MonstersSection';

const mapStateToProps = state => (
  {
    thresholds: getPartyThresholds(state),
    party: getSelectedPartyName(state),
  }
);

export default connect(
  mapStateToProps,
  null,
)(MonstersSection);
