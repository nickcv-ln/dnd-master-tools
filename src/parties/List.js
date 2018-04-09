import React from 'react';
import { Link } from 'react-router-dom';

import Page from 'common/Page';

const List = () => (
  <Page title="Party List">
    <Link to="/parties/add">add new party</Link>
  </Page>
);

export default List;
