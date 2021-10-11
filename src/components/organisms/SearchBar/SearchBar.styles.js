import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import { theme } from 'assets/styles/theme';

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};

  ${Input} {
    width: 100%;
    max-width: 350px;
    border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

export const LoginInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const UserInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const InnerWrapper = styled.div`
  width: 100%;
  position: relative;
`;
export const SearchResultsWrapper = styled.ul`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: 300px;
  max-height: 400px;
  position: absolute;
  z-index: 1;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: scroll;
`;
export const SearchResultsItem = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ isHighlightend }) => (isHighlightend ? theme.colors.darkPurple : null)};
`;
