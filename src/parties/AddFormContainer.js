import { connect } from 'react-redux';

import { addParty } from 'state/parties/actions';
import Form from 'parties/Form';

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addParty(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
