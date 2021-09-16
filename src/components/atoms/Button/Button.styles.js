import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-transform: capitalize;

  svg {
    width: 100%;
  }

  ${(props) =>
    props.primary &&
    css`
      padding: 20px 54px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.lightPurple};
      color: ${({ theme }) => theme.colors.darkGrey};
    `}
`;
