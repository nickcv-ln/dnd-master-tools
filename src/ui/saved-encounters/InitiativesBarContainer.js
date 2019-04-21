import { connect } from 'react-redux';

import { getcurrentPartyInitiatives } from 'state/saved-encounters/selectors';
import { getSelectedPartyName } from 'state/parties/selectors';
import { setInitiative } from 'state/saved-encounters/actions';
import InitiativesBar from 'ui/saved-encounters/InitiativesBar';

const mapStateToProps = state => ({
  initiatives: getcurrentPartyInitiatives(state),
  party: getSelectedPartyName(state),
});

const mapDispatchToProps = dispatch => ({
  setInitiative: (party, initiatives, isPartyMember = true) => {
    dispatch(setInitiative(party, initiatives, isPartyMember));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitiativesBar);
