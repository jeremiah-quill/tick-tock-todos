import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const StaticTodoView = ({ text, id, openConfigView }) => {
  const { removeTodo } = useTodoContext();

  function handleDelete() {
    removeTodo(id);
  }

  return (
    <>
      <div className="mx-3">{text}</div>
      <div className="flex ml-auto gap-3">
        <button onClick={openConfigView}>config</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
};

export default StaticTodoView;
