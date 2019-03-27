import { connect } from 'react-redux';

import {
  isPartySelected,
  doPartiesExist,
  getSelectedParty,
} from 'state/parties/selectors';
import PartySection from 'ui/encounters/PartySection';

const mapStateToProps = state => ({
  isPartySelected: isPartySelected(state),
  doPartiesExist: doPartiesExist(state),
  selectedParty: getSelectedParty(state),
});

export default connect(
  mapStateToProps,
  null,
)(PartySection);
