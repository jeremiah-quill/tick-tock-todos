import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

// * Pass in a component that will be rendered as modal's children.  modal is an absolute div with left, top, right, and bottom all set to 0
const Modal = ({ children }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <>
      <div onClick={closeModal} className="fixed inset-0 z-10 bg-black opacity-80" />
      <div className="fixed left-0 top-0 right-0 bottom-0 m-10 z-20 bg-white">{children}</div>
    </>
  );
};

export default Modal;
