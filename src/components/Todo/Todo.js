import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const Todo = ({ todo }) => {
  const { removeTodo } = useTodoContext();

  function handleDelete() {
    removeTodo(todo.id);
  }

  return (
    <li className="p-5 flex">
      <button>complete</button>
      <div className="mx-3">{todo.text}</div>
      <div className="flex ml-auto gap-3">
        <button>config</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </li>
  );
};

export default Todo;
