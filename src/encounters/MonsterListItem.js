import React from 'react';
import { DragSource } from 'react-dnd';
import { ListGroupItem, UncontrolledPopover, PopoverBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MonsterListItem = ({
  connectDragSource,
  color,
  id,
  name,
  page,
  experience,
  challenge,
}) => {
  const languages = Object.keys(page).map(language => (
    <div key={language}>
      {language} : page <strong>{page[language]}</strong> of the Monster Manual
    </div>
  ));

  /* eslint-disable */
  return connectDragSource(
    <div>
      <ListGroupItem color={color}>
        {name} [{challenge} - exp {experience}]
        <FontAwesomeIcon id={id} icon='info-circle' className="float-right mt-2 text-info" />
        <UncontrolledPopover trigger="focus" target={id}>
          <PopoverBody>
            {languages}
          </PopoverBody>
        </UncontrolledPopover>
      </ListGroupItem>
    </div>
  )
  /* eslint-enable */
};

MonsterListItem.defaultProps = {
  page: {},
};

const itemSource = {
  beginDrag: props => ({
    ...props,
  }),
};

const collectDrag = connect => ({
  connectDragSource: connect.dragSource(),
});

export default DragSource('monsters', itemSource, collectDrag)(MonsterListItem);
