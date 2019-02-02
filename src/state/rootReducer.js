import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';


import parties from 'state/parties/reducer';
import encounters from 'state/encounters/reducer';
import savedEncounters from 'state/saved-encounters/reducer';

export default combineReducers({
  parties,
  encounters,
  savedEncounters,
  router,
  form,
});
