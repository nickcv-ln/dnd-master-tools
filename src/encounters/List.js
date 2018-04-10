import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Page from 'common/Page';
import AddParty from 'parties/AddFormContainer';

const List = ({
  isPartySelected,
  doPartiesExist,
  selectedParty,
}) => {
  const noParty = (
    <div>
      <p>no party found: create one!</p>
      <AddParty />
    </div>
  );

  const selectParty = (
    <p>select one party</p>
  );

  let party = !doPartiesExist ? noParty : selectParty;

  if (isPartySelected) {
    const members = Object.keys(selectedParty.members).map(key => (
      <Col key={key} xl="2" lg="2" md="2" sm="4">
        { key }: {selectedParty.members[key].level}
      </Col>
    ));
    party = (
      <div>
        <h2>
          Party: <kbd>{selectedParty.name}</kbd>
          <Link className="float-right" to={`/parties/view/${selectedParty.name}`}>
            <FontAwesomeIcon
              size="1x"
              icon={['far', 'edit']}
            />
          </Link>
        </h2>
        <Row>
          { members }
        </Row>
      </div>
    );
  }

  return (
    <Page title="Encounters">
      <Row>
        <Col>
          <Jumbotron>
            { party }
          </Jumbotron>
        </Col>
      </Row>
    </Page>
  );
};

List.propTypes = {
  isPartySelected: PropTypes.bool.isRequired,
  doPartiesExist: PropTypes.bool.isRequired,
  selectedParty: PropTypes.shape({
    name: PropTypes.string,
  }),
};

List.defaultProps = {
  selectedParty: null,
};

export default List;
