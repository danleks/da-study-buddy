import styled from 'styled-components';

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

  svg {
    width: 100%;
  }
`;
