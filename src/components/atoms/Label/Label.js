import styled from 'styled-components';

const Label = styled.label`
  padding-bottom: 9px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-transform: capitalize;
`;

export default Label;
