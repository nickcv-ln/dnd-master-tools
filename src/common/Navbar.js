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
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class PageNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const selectedParty = this.props.selectedParty ? <kbd>{ this.props.selectedParty.name }</kbd> : 'select a party';
    const parties = Object.keys(this.props.parties).map(key => (
      <DropdownItem key={key} onClick={() => this.props.selectParty(key)}>
        { this.props.parties[key].name }
      </DropdownItem>
    ));
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={RoutedNavLink} to="/">
            <FontAwesomeIcon size="lg" icon={['fab', 'd-and-d']} /> Master Tools
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RoutedNavLink} to="/">Encounters</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  { selectedParty }
                </DropdownToggle>
                <DropdownMenu right>
                  { parties }
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
