import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const SavedEncountersList = ({ encounters }) => {
  const list = encounters.map((encounter) => {
    const mobs = Object.keys(encounter).map((monster) => {
      const mobData = encounter[monster];
      const name = mobData.number > 1 ? `${mobData.number}x ${mobData.name}` : mobData.name;
      return (
        <Badge pill color={mobData.color} className="mx-1">
          {name}
        </Badge>
      );
    });
    return (
      <ListGroupItem>{mobs}</ListGroupItem>
    );
  });

  return (
    <ListGroup>
      {list}
    </ListGroup>
  );
};

SavedEncountersList.propTypes = {
  encounters: PropTypes.arrayOf(PropTypes.shape({})),
};

SavedEncountersList.defaultProps = {
  encounters: null,
};

export default SavedEncountersList;
