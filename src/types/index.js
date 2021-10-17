import PropTypes from 'prop-types';

export const USERS_SHAPE = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.number.isRequired,
  average: PropTypes.number,
};
