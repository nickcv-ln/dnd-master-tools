import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';

const SavedEncountersList = ({ encounters }) => {
  if (encounters === null) {
    return <Redirect to="/" />;
  }

  const list = encounters.map((encounter) => {
    const index = encounters.indexOf(encounter);

    const mobs = Object.keys(encounter.mobs).map((monster) => {
      const mobData = encounter.mobs[monster];
      const name = mobData.number > 1 ? `${mobData.number}x ${mobData.name}` : mobData.name;
      return (
        <Badge key={`${index}-${monster}`} pill color={mobData.color} className="mx-1">
          {name}
        </Badge>
      );
    });

    return (
      <ListGroupItem key={index} className="monster-list">
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
};

SavedEncountersList.defaultProps = {
  encounters: null,
};

export default SavedEncountersList;
