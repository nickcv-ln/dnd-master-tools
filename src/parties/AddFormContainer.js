import { connect } from 'react-redux';

import { createParty } from 'state/parties/actions';
import { createEncounter } from 'state/encounters/actions';
import Form from 'parties/Form';

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => {
    dispatch(createParty(data));
    dispatch(createEncounter({
      party: data.name,
    }));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
