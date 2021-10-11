import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ deleteBtn }) => (deleteBtn ? '25px' : 'unset')};
  height: ${({ deleteBtn }) => (deleteBtn ? '25px' : 'unset')};
  border: none;
  border-radius: ${({ deleteBtn }) => (deleteBtn ? '50%' : '20px')};
  padding: ${({ deleteBtn }) => (deleteBtn ? 'unset' : '8px 20px')};
  cursor: pointer;
  background-color: ${({ theme, deleteBtn }) => (deleteBtn ? theme.colors.darkPurple : theme.colors.lightPurple)};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  text-transform: capitalize;

  svg {
    width: 100%;
  }
`;
