import React from 'react';
import { StyledNav, Wrapper, StyledLink } from './Navigation.styles';
import Logo from 'components/atoms/Logo/Logo';

const Navigation = () => {
  return (
    <StyledNav>
      <Wrapper>
        <li>
          <Logo />
        </li>
        <li>
          <StyledLink to="/" exact>
            Dashboard
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/add-user">Add user</StyledLink>
        </li>
      </Wrapper>
    </StyledNav>
  );
};

export default Navigation;
