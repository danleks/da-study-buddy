import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 13px 15px 13px 0;
  font-size: 15px;
  font-weight: 700;
  text-align: right;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
`;
