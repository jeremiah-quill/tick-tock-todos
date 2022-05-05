import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
// GiHamburgerMenu
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

// TODO: add functionality to hamburger menu
// TODO: add micro-animation to add button
const Navbar = () => {
  const { openModal } = useContext(ModalContext);

  function handleOpenModal() {
    openModal({ type: 'NEW_TODO' });
  }

  return (
    <div className="h-16 px-5 flex items-center justify-between fixed top-0 inset-x-0 bg-black text-gray-100">
      <button onClick={handleOpenModal}>
        <BsFillPlusCircleFill size="2em" />
      </button>
      <div>
        <button>
          <GiHamburgerMenu size="2em" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
