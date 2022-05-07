import React from 'react';

const Modal = ({ children, close }) => {
  return (
    <>
      <div onClick={close} className="fixed inset-0 z-10 bg-black opacity-80" />
      <div className="fixed left-0 top-0 right-0 bottom-0 m-10 z-20 bg-white">{children}</div>
    </>
  );
};

export default Modal;
