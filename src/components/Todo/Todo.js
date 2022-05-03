import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const Todo = ({ todo }) => {
  const { removeTodo, toggleConfigForm } = useTodoContext();

  function handleDelete() {
    removeTodo(todo.id);
  }

  function handleToggleConfigForm() {
    toggleConfigForm(todo.id);
  }

  return (
    <li className={`p-5 flex ${todo.isConfigOpen ? 'bg-amber-400' : ''}`}>
      <button>complete</button>
      <div className="mx-3">{todo.text}</div>
      <div className="flex ml-auto gap-3">
        <button onClick={handleToggleConfigForm}>config</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </li>
  );
};

export default Todo;
