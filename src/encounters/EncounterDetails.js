import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import MonsterCard from 'encounters/MonsterCard';
import { target, collect } from 'encounters/dropTarget';

class EncounterDetails extends Component {
  render() {
    const monsters = Object.keys(this.props.encounter).map(key => (
      <MonsterCard
        key={key}
        monster={this.props.encounter[key]}
        party={this.props.party}
        removeMonster={this.props.removeMonster}
      />
    ));

    return (
      /* eslint-disable function-paren-newline */
      this.props.connectDropTarget(
        <div className="droppable">
          { monsters }
        </div>,
      )
      /* eslint-enable */
    );
  }
}

EncounterDetails.propTypes = {
  encounter: PropTypes.shape({}).isRequired,
  party: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  removeMonster: PropTypes.func.isRequired,
};

export default DropTarget('monsters', target, collect)(EncounterDetails);
