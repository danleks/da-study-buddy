import styled from 'styled-components';

export const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-height: 100%;
  max-width: 500px;
  border-radius: 10px;
  padding: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;
