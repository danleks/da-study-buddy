import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  border-radius: 10px;
  padding: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const StyledList = styled.ul`
  list-style: none;
`;
