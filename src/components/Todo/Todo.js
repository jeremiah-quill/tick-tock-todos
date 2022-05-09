import { memo, useMemo } from 'react';
import ViewTodo from '../ViewTodo';
import Modal from '../Modal';
import { useModal } from '../../hooks/useModal';

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

  return (
    <>
      {isViewOpen ? (
        <Modal open={openView} close={closeView}>
          <ViewTodo todo={todo} close={closeView} />
        </Modal>
      ) : null}
      <li
        onClick={handleOpenTodo}
        className="p-5 hover:bg-gray-200 flex items-center h-24 cursor-pointer border-b-2  border-black">
        <input type="checkbox" className={`mr-3 rounded-full p-3 ${memoizedColor}`} />
        <div className="text-left overflow-hidden">
          <h1> {todo.title}</h1>
          <p className="text-xs">{todo.details}</p>
        </div>
      </li>
    </>
  );
};

export default memo(Todo);
