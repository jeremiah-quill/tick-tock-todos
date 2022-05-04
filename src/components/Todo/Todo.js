import { useState, memo } from 'react';
import ConfigView from '../ConfigView';
import StaticTodoView from '../StaticTodoView';

const Todo = ({ todo }) => {
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  function openConfigView() {
    setIsConfigOpen(true);
  }

  function closeConfigView() {
    setIsConfigOpen(false);
  }
  console.log('rendered todo');

  return (
    <div className="relative">
      <li className="p-5 flex">
        <button>complete</button>
        {isConfigOpen ? (
          <ConfigView text={todo.text} id={todo.id} closeConfigView={closeConfigView} />
        ) : (
          <StaticTodoView text={todo.text} id={todo.id} openConfigView={openConfigView} />
        )}
      </li>
    </div>
  );
};

export default memo(Todo);
