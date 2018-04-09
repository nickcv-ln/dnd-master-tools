import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Page from 'common/Page';

const List = ({ isPartySelected, doPartiesExist }) => {
  const createParty = (
    <p>
      no party was found, please
       <Button tag={Link} to="/parties/add">create one</Button>
    </p>
  );

  const selectParty = (
    <p>select one party</p>
  );

  let internalList = <p>doSomething</p>;

  if (!isPartySelected) {
    internalList = !doPartiesExist ? createParty : selectParty;
  }

  return (
    <Page title="Encounters">
      { internalList }
    </Page>
  );
};

List.propTypes = {
  isPartySelected: PropTypes.bool.isRequired,
  doPartiesExist: PropTypes.bool.isRequired,
};

export default List;
