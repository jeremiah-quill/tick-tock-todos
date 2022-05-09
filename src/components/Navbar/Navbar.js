import { AiOutlinePlus } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useModal } from '../../hooks/useModal';
import NewTodo from '../NewTodo';
import Modal from '../Modal';
import { AnimatePresence } from 'framer-motion';

// TODO: add functionality to hamburger menu
// TODO: add micro-animation to add button
const Navbar = () => {
  const [isNewTodo, openNewTodo, closeNewTodo] = useModal();

  function handleOpenModal() {
    openNewTodo();
  }

  return (
    <>
      <AnimatePresence>
        {isNewTodo ? (
          <Modal open={openNewTodo} close={closeNewTodo}>
            <NewTodo close={closeNewTodo} />
          </Modal>
        ) : null}
      </AnimatePresence>
      <div className="h-16 px-5 flex items-center justify-between fixed top-0 inset-x-0 bg-black text-gray-100">
        <button className="hover:bg-gray-800 rounded" onClick={handleOpenModal}>
          <AiOutlinePlus size="1.6em" />
        </button>
        <div>
          <button className="hover:bg-gray-800 rounded p-1">
            <FiMenu size="1.6em" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
