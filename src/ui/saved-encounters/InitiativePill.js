import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class InitiativePill extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
    };

    this.beginEditing = this.beginEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
  }

  beginEditing() {
    this.setState({
      isEditing: true,
    });
  }

  stopEditing(e) {
    const { party, setInitiative, creature: { name } } = this.props;

    if (e.key === 'Enter') {
      setInitiative(party, { [name]: e.target.value });
      this.setState({
        isEditing: false,
      });
    }
  }

  render() {
    const {
      creature: {
        name,
        value,
        display,
        isPartyMember,
        hasCollusions,
      },
    } = this.props;
    const { isEditing } = this.state;

    const cssClasses = ['initiativePill'];
    cssClasses.push(isPartyMember ? 'isPartyMember' : 'isMob');
    cssClasses.push(hasCollusions && value ? 'hasCollusion' : '');

    const button = isPartyMember && !isEditing ?
      <FontAwesomeIcon onClick={this.beginEditing} icon="edit" /> :
      null;

    const valueBox = isEditing ?
      (
        <input
          onKeyDown={this.stopEditing}
          autoFocus
          onFocus={e => e.target.select()}
          defaultValue={value}
        />
      ) :
      display;

    return (
      <p className={cssClasses.join(' ')}><strong>{name}:</strong> {valueBox} {button}</p>
    );
  }
}

InitiativePill.propTypes = {
  creature: PropTypes.shape({
    name: PropTypes.string.isRequired,
    display: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    isPartyMember: PropTypes.bool.isRequired,
    hasCollusions: PropTypes.bool.isRequired,
  }).isRequired,
  party: PropTypes.string.isRequired,
  setInitiative: PropTypes.func.isRequired,
};

export default InitiativePill;
