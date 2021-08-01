import styled from 'styled-components';
import Credentials from 'components/atoms/Credentials/Credentials';

export const Wrapper = styled.li`
  height: 91px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
export const InnerWrapper = styled.div`
  margin: 0 14px 0 24px;
`;
