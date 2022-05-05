import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

const Modal = ({ children }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <>
      <div onClick={closeModal} className="z-10 bg-black opacity-80 absolute inset-0" />
      <div className="m-5 absolute inset-0 z-20 bg-slate-500">{children}</div>;
    </>
  );
};

export default Modal;
