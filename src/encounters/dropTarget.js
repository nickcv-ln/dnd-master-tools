import { store } from 'state/store';
import { addMonster } from 'state/encounters/actions';
import { getSelectedPartyName } from 'state/parties/selectors';

export const collect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

export const target = {
  drop: (props, monitor) => {
    store.dispatch(addMonster(
      getSelectedPartyName(store.getState()),
      monitor.getItem(),
    ));
  },
};
