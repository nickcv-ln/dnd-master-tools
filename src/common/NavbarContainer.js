import { connect } from 'react-redux';

import { getPartyList, getSelectedParty } from 'state/parties/selectors';
import { selectParty } from 'state/parties/actions';
import Navbar from 'common/Navbar';

const mapStateToProps = state => (
  {
    selectedParty: getSelectedParty(state),
    parties: getPartyList(state),
  }
);

const mapDispatchToProps = dispatch => ({
  selectParty: party => dispatch(selectParty(party)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
