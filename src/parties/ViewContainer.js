import { connect } from 'react-redux';

import { getParty } from 'state/parties/selectors';
import { removeMember } from 'state/parties/actions';
import View from 'parties/View';

const mapStateToProps = (state, { match: { params } }) => (
  {
    party: getParty(params.party)(state),
  }
);

const mapDispatchToProps = dispatch => ({
  removeMember: (party, member) => dispatch(removeMember({
    party,
    member,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
