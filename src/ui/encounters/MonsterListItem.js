import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ListGroupItem, UncontrolledPopover, PopoverBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MonsterListItem = ({
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

  return connectDragSource(
    <div>
      <ListGroupItem color={color}>
        {name} [{challenge} - exp {experience}]
        <FontAwesomeIcon id={id} icon="info-circle" className="float-right mt-2 text-info" />
        <UncontrolledPopover trigger="focus" target={id}>
          <PopoverBody>
            {languages}
          </PopoverBody>
        </UncontrolledPopover>
      </ListGroupItem>
    </div>,
  );
};

MonsterListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  page: PropTypes.shape({}),
  experience: PropTypes.number.isRequired,
  challenge: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  color: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
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
