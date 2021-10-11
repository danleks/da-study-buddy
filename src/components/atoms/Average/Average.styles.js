import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isBig }) => (isBig ? '68px' : '34px')};
  height: ${({ isBig }) => (isBig ? '68px' : '34px')};
  border-radius: 50%;
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.m)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]}; ;
`;
