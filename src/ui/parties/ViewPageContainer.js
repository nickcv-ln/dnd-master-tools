import { connect } from 'react-redux';

import { getParty } from 'state/parties/selectors';
import { removeMember, increaseLevel, decreaseLevel } from 'state/parties/actions';
import ViewPage from 'ui/parties/ViewPage';

const mapStateToProps = (state, { match: { params } }) => (
  {
    party: getParty(params.party)(state),
  }
);

const mapDispatchToProps = dispatch => ({
  removeMember: (party, member) => dispatch(removeMember(
    party,
    member,
  )),
  increaseLevel: (party, member) => dispatch(increaseLevel(
    party,
    member,
  )),
  decreaseLevel: (party, member) => dispatch(decreaseLevel(
    party,
    member,
  )),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewPage);
