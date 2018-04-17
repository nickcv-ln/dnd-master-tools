import { connect } from 'react-redux';

import {
  getPartyThresholds,
  getSelectedPartyName,
} from 'state/parties/selectors';
import Monsters from 'encounters/Monsters';

const mapStateToProps = state => (
  {
    thresholds: getPartyThresholds(state),
    party: getSelectedPartyName(state),
  }
);

export default connect(
  mapStateToProps,
  null,
)(Monsters);
