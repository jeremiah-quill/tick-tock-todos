import { memo, useMemo } from 'react';
import ViewTodo from '../ViewTodo';
import Modal from '../Modal';
import { useModal } from '../../hooks/useModal';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: connect checkbox with state
// TODO: order todos based on level of importance, remove items that have been completed?
const Todo = ({ todo }) => {
  const [isViewOpen, openView, closeView] = useModal();

  function handleOpenTodo(e) {
    if (e.target.getAttribute('type') !== 'checkbox') {
      openView();
    }
  }

  const memoizedColor = useMemo(() => {
    switch (parseInt(todo.importance)) {
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-orange-500';
      case 3:
        return 'bg-yellow-500';
      case 4:
        return 'bg-blue-200';
      case 5:
        return 'bg-white';
      default:
        return 'bg-purple-400';
    }
  }, [todo.importance]);

  const listItem = {
    initial: {
      opacity: 0,
      // x: '-20%',
    },
    animate: {
      opacity: 1,
      // x: '0%',
      // transition: {
      //   duration: 0.3,
      // },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isViewOpen ? (
          <Modal open={openView} close={closeView}>
            <ViewTodo todo={todo} close={closeView} isOpen={isViewOpen} />
          </Modal>
        ) : null}
      </AnimatePresence>
      <motion.li
        variants={listItem}
        onClick={handleOpenTodo}
        className="p-5 hover:bg-gray-200 rounded flex items-center h-24 cursor-pointer">
        <input
          type="checkbox"
          className={`mr-3 rounded p-2 border-2 border-black ${memoizedColor}`}
        />
        <div className="text-left overflow-hidden">
          <h1> {todo.title}</h1>
          <p className="text-xs">{todo.details}</p>
        </div>
      </motion.li>
    </>
  );
};

export default memo(Todo);
