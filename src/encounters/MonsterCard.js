import React from 'react';
import { DragSource } from 'react-dnd';
import { ListGroupItem } from 'reactstrap';

export const MonsterCard = ({
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

const collectDrag = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  dragItemId: monitor.getItem(),
});

export default DragSource('monsters', itemSource, collectDrag)(MonsterCard);
