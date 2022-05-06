import React, { useContext, useEffect, useState, useCallback } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { DispatchTodosContext } from '../../contexts/TodoContext';

const ViewTodo = ({ todo }) => {
  const [importanceColor, setImportanceColor] = useState(null);
  const [levelInputValue, setLevelInputValue] = useState(todo.importance);

  const { closeModal } = useContext(ModalContext);
  const dispatchTodos = useContext(DispatchTodosContext);

  const handleLevelChange = (e) => {
    setLevelInputValue(e.target.value);
  };

  // TODO: move to a helper functions file
  function mapImportanceToColor(importance) {
    switch (importance) {
      case 1:
        setImportanceColor('bg-red-500');
        break;
      case 2:
        setImportanceColor('bg-orange-500');
        break;
      case 3:
        setImportanceColor('bg-yellow-500');
        break;
      case 4:
        setImportanceColor('bg-blue-200');
        break;
      case 5:
        setImportanceColor('bg-red-500');
        break;
      default:
        setImportanceColor('bg-purple-400');
    }
  }

  useEffect(() => {
    dispatchTodos({
      type: 'UPDATE_IMPORTANCE',
      importance: parseInt(levelInputValue),
      id: todo.id,
    });
    mapImportanceToColor(parseInt(levelInputValue));
  }, [levelInputValue]);

  return (
    <div className={`p-5 ${importanceColor}`}>
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
        {/* <button className="ml-auto">Importance</button> */}
      </div>
    </div>
  );
};

export default ViewTodo;
