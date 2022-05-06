import React, { useContext, useEffect, useState, useMemo } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { DispatchTodosContext } from '../../contexts/TodoContext';

const ViewTodo = ({ todo }) => {
  const [levelInputValue, setLevelInputValue] = useState(todo.importance);

  const { closeModal } = useContext(ModalContext);
  const dispatchTodos = useContext(DispatchTodosContext);

  const handleLevelChange = (e) => {
    setLevelInputValue(e.target.value);
  };

  const memoizedColor = useMemo(() => {
    switch (parseInt(levelInputValue)) {
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
  }, [levelInputValue]);

  useEffect(() => {
    dispatchTodos({
      type: 'UPDATE_IMPORTANCE',
      importance: parseInt(levelInputValue),
      id: todo.id,
    });
  }, [levelInputValue]);

  return (
    <div className={`p-5 ${memoizedColor}`}>
      <button onClick={closeModal} className="absolute top-5 right-5">
        close
      </button>
      <div className="text-left mt-10">
        <h1> {todo.title}</h1>
        <p className="text-xs">{todo.details}</p>
      </div>
      <div className="flex w-full">
        <nav className="ml-auto mt-5 mr-5">
          {/* <button type="button" onClick={() => console.log('opened importance picker')}>
              <FaFlag />
            </button> */}
          <select name="levels" id="levels" value={levelInputValue} onChange={handleLevelChange}>
            <option value={5}>Importance: 5</option>
            <option value={4}>Importance: 4</option>
            <option value={3}>Importance: 3</option>
            <option value={2}>Importance: 2</option>
            <option value={1}>Importance: 1</option>
          </select>
        </nav>
      </div>
    </div>
  );
};

export default ViewTodo;
