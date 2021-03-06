import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Credentials.styles';

const Credentials = ({ name, attendance }) => {
  return (
    <Wrapper>
      <span className="name">{name}</span>
      <span className="attendance">attendance: {attendance}</span>
    </Wrapper>
  );
};

Credentials.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.number.isRequired,
};

export default Credentials;
