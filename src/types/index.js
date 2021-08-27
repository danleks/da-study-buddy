import PropTypes from 'prop-types';

export const USERS_SHAPE = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
  average: PropTypes.string,
};
