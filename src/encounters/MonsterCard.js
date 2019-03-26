import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonGroup,
  Button,
  ListGroupItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MonsterCard = ({
  monster,
  party,
  removeMonster,
  increaseMonsterCount,
  decreaseMonsterCount,
}) => (
  <ListGroupItem className="monster-card p-2 clearfix align-text-bottom" color={monster.color}>
    <span className="mt-2 d-inline-block">
      {monster.name} [{monster.challenge}]
    </span>
    <ButtonGroup className="float-right" color="light">
      <Button onClick={() => decreaseMonsterCount(party, monster.name)}>
        <FontAwesomeIcon
          size="xs"
          icon="minus"
        />
      </Button>
      <Button className="font-weight-bold">{monster.number}</Button>
      <Button onClick={() => increaseMonsterCount(party, monster.name)}>
        <FontAwesomeIcon
          size="xs"
          icon="plus"
        />
      </Button>
      <Button onClick={() => removeMonster(party, monster.name)}>
        <FontAwesomeIcon
          size="1x"
          icon="trash"
        />
      </Button>
    </ButtonGroup>
  </ListGroupItem>
);

MonsterCard.propTypes = {
  monster: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
    challenge: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  party: PropTypes.string.isRequired,
  removeMonster: PropTypes.func.isRequired,
  increaseMonsterCount: PropTypes.func.isRequired,
  decreaseMonsterCount: PropTypes.func.isRequired,
};


export default MonsterCard;
