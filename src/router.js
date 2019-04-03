import React from 'react';
import { Route, Switch } from 'react-router';

import EncounterPageContainer from 'ui/encounters/EncounterPageContainer';
import PartyAddPage from 'ui/parties/AddPage';
import PartyViewPageContainer from 'ui/parties/ViewPageContainer';
import SavedEncountersPage from 'ui/saved-encounters/SavedEncountersPage';
import Page404 from 'ui/common/Page404';

const Router = () => (
  <Switch>
    <Route exact path="/" component={EncounterPageContainer} />
    <Route path="/parties/add" component={PartyAddPage} />
    <Route path="/parties/view/:party" component={PartyViewPageContainer} />
    <Route path="/encounters/:party" component={SavedEncountersPage} />
    <Route component={Page404} />
  </Switch>
);

export default Router;
