import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import MonsterCard from 'encounters/MonsterCard';
import { target, collect } from 'encounters/dropTarget';

class EncounterDetails extends Component {
  render() {
    const {
      encounter,
      party,
      removeMonster,
      increaseMonsterCount,
      decreaseMonsterCount,
      connectDropTarget,
    } = this.props;
    const monsters = Object.keys(encounter).map(key => (
      <MonsterCard
        key={key}
        monster={encounter[key]}
        party={party}
        removeMonster={removeMonster}
        increaseMonsterCount={increaseMonsterCount}
        decreaseMonsterCount={decreaseMonsterCount}
      />
    ));

    return (
      connectDropTarget(
        <div className="droppable">
          { monsters }
        </div>,
      )
    );
  }
}

EncounterDetails.propTypes = {
  encounter: PropTypes.shape({}).isRequired,
  party: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  removeMonster: PropTypes.func.isRequired,
  increaseMonsterCount: PropTypes.func.isRequired,
  decreaseMonsterCount: PropTypes.func.isRequired,
};

export default DropTarget('monsters', target, collect)(EncounterDetails);
