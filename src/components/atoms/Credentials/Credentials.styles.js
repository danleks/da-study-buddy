import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > .name {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  & > .attendance {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
