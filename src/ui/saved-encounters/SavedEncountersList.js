import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';

const SavedEncountersList = ({ encounters, party, select }) => {
  const list = encounters.map((encounter, id) => {
    const mobs = Object.keys(encounter.mobs).map((monster) => {
      const mobData = encounter.mobs[monster];
      const name = mobData.number > 1 ? `${mobData.number}x ${mobData.name}` : mobData.name;
      return (
        <Badge key={`${id}-${monster}`} pill color={mobData.color} className="mx-1">
          {name}
        </Badge>
      );
    });

    return (
      <ListGroupItem onClick={() => select(party, id)} key={id} className="monster-list">
        <div className={`header text-center bg-${encounter.color}`}>{encounter.exp} XP</div>
        <div className="body">{mobs}</div>
      </ListGroupItem>
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
  party: PropTypes.string,
  select: PropTypes.func.isRequired,
};

SavedEncountersList.defaultProps = {
  encounters: null,
  party: null,
};

export default SavedEncountersList;
