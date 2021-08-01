import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.propTypes = {};

export default Button;
