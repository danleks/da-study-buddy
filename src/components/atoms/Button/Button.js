import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ deleteBtn, label, ...props }) => {
  return (
    <StyledButton deleteBtn={deleteBtn} {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;
