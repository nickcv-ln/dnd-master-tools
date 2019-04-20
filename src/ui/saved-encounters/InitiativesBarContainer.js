import { connect } from 'react-redux';

import {
  getcurrentPartyInitiatives,
} from 'state/saved-encounters/selectors';
import InitiativesBar from 'ui/saved-encounters/InitiativesBar';

const mapStateToProps = state => ({
  initiatives: getcurrentPartyInitiatives(state),
});

export default connect(
  mapStateToProps,
  null,
)(InitiativesBar);
