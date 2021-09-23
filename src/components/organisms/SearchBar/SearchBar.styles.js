import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

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
