import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ACTIVE_CLASS_NAME = 'activeLink';

export const StyledNav = styled.nav`
  grid-column: 1 / 1;
  grid-row: 1 / 3;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding-top: 20px;
  list-style-type: none;

  li:first-child {
    width: 100%;
  }

  li:not(:first-child) {
    position: relative;
    padding-right: 24px;
  }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: ACTIVE_CLASS_NAME })`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};

  &.activeLink::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 20px;
    height: 3px;
    transform: translateY(-50%);
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    transition: 0.3s opacity ease-out;
  }
`;
