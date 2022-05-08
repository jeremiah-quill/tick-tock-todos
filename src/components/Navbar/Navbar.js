import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
// GiHamburgerMenu
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useModal } from '../../hooks/useModal';
import NewTodo from '../NewTodo';
import Modal from '../Modal';

// TODO: add functionality to hamburger menu
// TODO: add micro-animation to add button
const Navbar = () => {
  const [isNewTodo, openNewTodo, closeNewTodo] = useModal();

  function handleOpenModal() {
    openNewTodo();
  }

  return (
    <>
      {isNewTodo ? (
        <Modal open={openNewTodo} close={closeNewTodo}>
          <NewTodo close={closeNewTodo} />
        </Modal>
      ) : null}
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
    </>
  );
};

export default Navbar;
