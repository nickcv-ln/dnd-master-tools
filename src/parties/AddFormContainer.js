import { connect } from 'react-redux';

import { createParty } from 'state/parties/actions';
import Form from 'parties/Form';

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(createParty(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
