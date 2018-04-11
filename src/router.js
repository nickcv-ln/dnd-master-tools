import React from 'react';
import { Route, Switch } from 'react-router';

import EncountersList from 'encounters/ListContainer';
import PartyAdd from 'parties/Add';
import PartyView from 'parties/ViewContainer';

const Router = () => (
  <Switch>
    <Route exact path="/" component={EncountersList} />
    <Route path="/parties/add" component={PartyAdd} />
    <Route path="/parties/view/:party" component={PartyView} />
  </Switch>
);

export default Router;
