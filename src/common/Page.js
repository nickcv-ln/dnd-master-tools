import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Navbar from 'common/NavbarContainer';

const Page = ({ children }) => (
  <Container fluid>
    <Row>
      <Col><Navbar /></Col>
    </Row>
    <Row className="mt-2">
      <Col>
        { children }
      </Col>
    </Row>
  </Container>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Page;
