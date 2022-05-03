import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const StaticTodoView = ({ text, id }) => {
  const { removeTodo, toggleConfigForm } = useTodoContext();

  function handleDelete() {
    removeTodo(id);
  }

  function handleToggleConfigForm() {
    toggleConfigForm(id);
  }

  return (
    <>
      <div className="mx-3">{text}</div>
      <div className="flex ml-auto gap-3">
        <button onClick={handleToggleConfigForm}>config</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
};

export default StaticTodoView;
