import { useContext, memo } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

// TODO: make a checkbox input
const Todo = ({ todo }) => {
  const { openModal } = useContext(ModalContext);

  function handleOpenTodo() {
    openModal({ type: 'VIEW_TODO', todo: todo });
  }

  return (
    // <div className="relative">
    <li onClick={handleOpenTodo} className="p-5 flex h-24 cursor-pointer">
      <div className="text-left overflow-hidden">
        <h1> {todo.title}</h1>
        <p className="text-xs">{todo.details}</p>
      </div>
    </li>
    // </div>
  );
};

export default memo(Todo);
