import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

// eslint-disable-next-line
import MonsterListItem from 'encounters/MonsterListItem';
import { getChallengeForThreshold } from 'utils/thresholds';
import monsterList from 'data/monsters';


class Monsters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      minChallenge: getChallengeForThreshold(props.thresholds.easy, false, true),
      maxChallenge: getChallengeForThreshold(props.thresholds.deadly, true),
    };

    this.updateFilter = this.updateFilter.bind(this);
    this.updateMinChallenge = this.updateMinChallenge.bind(this);
    this.updateMaxChallenge = this.updateMaxChallenge.bind(this);
    this.filterMonsters = this.filterMonsters.bind(this);
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.thresholds) {
      this.setState({
        minChallenge: getChallengeForThreshold(nextProps.thresholds.easy, false, true),
        maxChallenge: getChallengeForThreshold(nextProps.thresholds.deadly, true),
      });
    }
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  updateMinChallenge(e) {
    this.setState({
      minChallenge: e.target.value,
    });
  }

  updateMaxChallenge(e) {
    this.setState({
      maxChallenge: e.target.value,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeChallenge(challenge) {
    switch (challenge) {
      case '0':
        return -1;
      case '1/8':
        return 0.125;
      case '1/4':
        return 0.25;
      case '1/2':
        return 0.5;
      default:
        return challenge;
    }
  }

  filterMonsters(monster) {
    const challenge = this.normalizeChallenge(monster.challenge);
    if (challenge > this.state.maxChallenge) {
      return '';
    }
    if (challenge < this.state.minChallenge) {
      return '';
    }
    if (this.state.filter.length && !monster.name.toLowerCase().includes(this.state.filter)) {
      return '';
    }

    let color = 'default';

    if (monster.experience <= this.props.thresholds.easy) {
      color = 'success';
    } else if (monster.experience > this.props.thresholds.deadly) {
      color = 'dark';
    } else if (monster.experience >= this.props.thresholds.hard) {
      color = 'danger';
    } else if (monster.experience >= this.props.thresholds.medium) {
      color = 'warning';
    }

    return (
      <MonsterListItem {...monster} color={color} key={monster.name} />
    );
  }

  render() {
    const items = monsterList.map(this.filterMonsters);

    const challenges = (
      <React.Fragment>
        <option value="-1">0</option>
        <option value="0.125">1/8</option>
        <option value="0.25">1/4</option>
        <option value="0.5">1/2</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="30">30</option>
      </React.Fragment>
    );

    return (
      <div>
        <h3 className="text-center">Monsters</h3>
        <Input placeholder="filter by name" onChange={this.updateFilter} />
        <div className="form-inline d-flex mt-2">
          <InputGroup className="col-md-6 col-xs-12 mt-md-0 mt-2">
            <InputGroupAddon addonType="prepend">min challenge</InputGroupAddon>
            <Input type="select" value={this.state.minChallenge} onChange={this.updateMinChallenge}>
              { challenges }
            </Input>
          </InputGroup>
          <InputGroup className="col-md-6 col-xs-12 mt-md-0 mt-2">
            <InputGroupAddon addonType="prepend">max challenge</InputGroupAddon>
            <Input type="select" value={this.state.maxChallenge} onChange={this.updateMaxChallenge}>
              { challenges }
            </Input>
          </InputGroup>
        </div>
        <hr />
        <span className="legend success">&lt;= easy</span>
        <span className="legend">&lt; medium</span>
        <span className="legend warning">&gt;= medium</span>
        <span className="legend danger">&gt;= hard</span>
        <span className="legend dark">&gt;= deadly</span>
        <hr />
        <ListGroup className="monsterList">
          { items }
        </ListGroup>
      </div>
    );
  }
}

Monsters.propTypes = {
  thresholds: PropTypes.shape({
    easy: PropTypes.number,
    medium: PropTypes.number,
    hard: PropTypes.number,
    deadly: PropTypes.number,
  }).isRequired,
};

export default Monsters;
