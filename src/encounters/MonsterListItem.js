import React from 'react';
import { DragSource } from 'react-dnd';
import { ListGroupItem } from 'reactstrap';

export const MonsterListItem = ({
  connectDragSource,
  color,
  name,
  experience,
  challenge,
}) => (
  /* eslint-disable */
  connectDragSource(
    <div>
      <ListGroupItem color={color}>
        {name} [{challenge} - exp {experience}]
      </ListGroupItem>
    </div>
  )
  /* eslint-enable */
);

const itemSource = {
  beginDrag: props => ({
    ...props,
  }),
};

const collectDrag = connect => ({
  connectDragSource: connect.dragSource(),
});

export default DragSource('monsters', itemSource, collectDrag)(MonsterListItem);
