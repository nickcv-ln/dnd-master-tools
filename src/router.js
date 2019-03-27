import React from 'react';
import { Route, Switch } from 'react-router';

import EncounterPageContainer from 'ui/encounters/EncounterPageContainer';
import PartyAddPage from 'ui/parties/AddPage';
import PartyViewPageContainer from 'ui/parties/ViewPageContainer';

const Router = () => (
  <Switch>
    <Route exact path="/" component={EncounterPageContainer} />
    <Route path="/parties/add" component={PartyAddPage} />
    <Route path="/parties/view/:party" component={PartyViewPageContainer} />
  </Switch>
);

export default Router;
