import { connect } from 'react-redux';

import { addMember } from 'state/parties/actions';
import Form from 'parties/members/Form';

const mapDispatchToProps = (dispatch, { party }) => ({
  onSubmit: (data) => {
    dispatch(addMember({
      ...data,
      party,
    }));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
