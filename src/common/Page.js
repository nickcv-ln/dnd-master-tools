import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Navbar from 'common/Navbar';

const Page = ({ title, children }) => (
  <Container fluid>
    <Row>
      <Col><Navbar /></Col>
    </Row>
    <Row>
      <Col>
        <h1>{title}</h1>
        { children }
      </Col>
    </Row>
  </Container>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Page;
