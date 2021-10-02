import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 500px;
`;
export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  padding: 9px;
  border-radius: 50%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
