import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 25px;
  background: none;
  box-shadow: -2px 4px 10px #737c8e17;
`;

export default Input;
