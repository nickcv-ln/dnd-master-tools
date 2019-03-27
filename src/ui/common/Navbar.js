import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink as RoutedNavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PageNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { selectedParty, parties, selectParty } = this.props;
    const { isOpen } = this.state;
    const selectedPartyText = selectedParty ? <kbd>{ selectedParty.name }</kbd> : 'select a party';
    const partiesText = Object.keys(parties).map(key => (
      <DropdownItem key={key} onClick={() => selectParty(key)}>
        { parties[key].name }
      </DropdownItem>
    ));
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={RoutedNavLink} to="/">
            <FontAwesomeIcon size="lg" icon={['fab', 'd-and-d']} /> Master Tools
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RoutedNavLink} to="/list">Encounters List</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RoutedNavLink} to="/">Encounters Creator</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  { selectedPartyText }
                </DropdownToggle>
                <DropdownMenu right>
                  { partiesText }
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/parties/add">Add Party</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

PageNavBar.propTypes = {
  selectedParty: PropTypes.shape({
    name: PropTypes.string,
  }),
  parties: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  selectParty: PropTypes.func.isRequired,
};

PageNavBar.defaultProps = {
  selectedParty: null,
};

export default PageNavBar;
