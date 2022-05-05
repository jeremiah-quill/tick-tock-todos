import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

// Todo: refactor this to hamburger with slide out menu
const Navbar = () => {
  const { openModal } = useContext(ModalContext);

  function handleOpenModal() {
    openModal('NEW_NOTE');
  }

  return (
    <div className="h-16 flex items-center justify-between fixed top-0 inset-x-0 bg-black text-gray-100">
      <button onClick={handleOpenModal}>add todo</button>
      <div>hamburger</div>
    </div>
  );
};

export default Navbar;
