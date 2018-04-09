import { connect } from 'react-redux';

import { isPartySelected, doPartiesExist } from 'state/parties/selectors';
import List from 'encounters/List';

const mapStateToProps = state => (
  {
    isPartySelected: isPartySelected(state),
    doPartiesExist: doPartiesExist(state),
  }
);

export default connect(
  mapStateToProps,
  null,
)(List);
