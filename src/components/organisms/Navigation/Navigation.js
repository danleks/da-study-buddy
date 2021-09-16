import React from 'react';
import { Wrapper, StyledLink } from './Navigation.styles';
import Logo from 'components/atoms/Logo/Logo';

const Navigation = () => {
  return (
    <nav>
      <Logo />
      <Wrapper>
        <li>
          <StyledLink to="/" exact>
            Dashboard
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/add-user">Add user</StyledLink>
        </li>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
