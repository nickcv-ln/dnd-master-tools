import { connect } from 'react-redux';
import { resetSection } from 'redux-form';

import { addMember } from 'state/parties/actions';
import Form from 'parties/members/Form';

const mapDispatchToProps = (dispatch, { party }) => ({
  onSubmit: (data) => {
    dispatch(addMember({
      ...data,
      party,
    }));
  },
  resetSection: (input) => {
    dispatch(resetSection('new-member', input));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
