import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, average, attendance = 0 } }) => {
  return (
    <li>
      <div>
        <span>{average}</span>
      </div>
      <div>
        <span>{name}</span>
        <span>{attendance}</span>
      </div>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
