import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalWrapper = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 627px;
  height: 644px;
  padding: 50px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);
`;
