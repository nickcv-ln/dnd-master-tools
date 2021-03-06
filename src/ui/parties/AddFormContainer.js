import { connect } from 'react-redux';

import { createParty } from 'state/parties/actions';
import { createEncounter } from 'state/encounters/actions';
import { createPartyEncounters } from 'state/saved-encounters/actions';
import Form from 'ui/parties/Form';

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => {
    dispatch(createParty(data.name));
    dispatch(createEncounter({
      party: data.name,
    }));
    dispatch(createPartyEncounters({
      party: data.name,
    }));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
