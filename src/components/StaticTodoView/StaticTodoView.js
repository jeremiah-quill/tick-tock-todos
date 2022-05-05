import React, { useContext } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import { FaTrash } from 'react-icons/fa';
import { GrConfigure } from 'react-icons/gr';

const StaticTodoView = ({ text, id, openConfigView }) => {
  const dispatchTodos = useContext(DispatchTodosContext);

  function handleDelete() {
    dispatchTodos({ type: 'REMOVE_TODO', id: id });
  }

  return (
    <>
      <div className="mx-3 h-14 grow text-left px-2 border-2 align-top justify-start overflow-hidden">
        <p>{text}</p>
      </div>
      <div className="flex ml-auto gap-3">
        {/* <button onClick={openConfigView}>
          <GrConfigure />
        </button> */}
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default StaticTodoView;
