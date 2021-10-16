import Button from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';

//const modalContainer = document.getElementById('modal-container');

const Modal = ({ isOpen, handleCloseModal, children }) => {
  // const modalNode = document.createElement('div');
  // useEffect(() => {
  //   modalContainer.appendChild(modalNode);

  //   return () => modalContainer.removeChild(modalNode);
  // }, [modalNode]);
  // return ReactDOM.createPortal(
  //   <ModalWrapper>
  //     {children}
  //     <Button onClick={handleCloseModal} label="save" />
  //   </ModalWrapper>,
  //   modalNode
  // );

  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
      <Button onClick={handleCloseModal} label="save" />
    </ModalWrapper>
  );
};

export default Modal;
