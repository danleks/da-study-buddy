import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Navigation.styles';
import Logo from '../../atoms/Logo/Logo';

const Navigation = () => {
  return (
    <nav>
      <Logo />
      <Wrapper>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/add-user">Add user</Link>
        </li>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
