import React, { useContext, useEffect, useState, useMemo } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
// AiOutlineCloseCircle
import { FaTrash } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import EditorView from '../EditorView';
import Button from '../Button';

// TODO: separate into view vs. editor
const ViewTodo = ({ todo, close }) => {
  const [levelInputValue, setLevelInputValue] = useState(todo.importance);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const dispatchTodos = useContext(DispatchTodosContext);

  const handleLevelChange = (e) => {
    setLevelInputValue(e.target.value);
  };

  const openEditor = () => {
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
  };

  const handleDelete = () => {
    dispatchTodos({ type: 'REMOVE_TODO', id: todo.id });
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
  }, [levelInputValue, todo.importance]);

  return (
    <div className={`p-5 rounded ${memoizedColor}`}>
      <button onClick={close} className="absolute top-5 right-5 hover:bg-orange-200 p-1 rounded">
        <GrClose />
      </button>
      <div className={`text-left p-3 mt-10`}>
        {isEditorOpen ? (
          <EditorView
            todo={todo}
            closeEditor={closeEditor}
            levelInputValue={levelInputValue}
            handleLevelChange={handleLevelChange}
          />
        ) : (
          <div className="p-3">
            <div onClick={openEditor}>
              <h1> {todo.title}</h1>
              <p className="text-xs">{todo.details}</p>
            </div>
            <div className="flex w-full">
              <nav className="ml-auto mt-5 mr-5">
                <select
                  className="rounded"
                  name="levels"
                  id="levels"
                  value={levelInputValue}
                  onChange={handleLevelChange}>
                  <option value={5}>Importance: 5</option>
                  <option value={4}>Importance: 4</option>
                  <option value={3}>Importance: 3</option>
                  <option value={2}>Importance: 2</option>
                  <option value={1}>Importance: 1</option>
                </select>
                <Button
                  type="button"
                  onClick={handleDelete}
                  style="hover:bg-yellow-200 p-1 rounded"
                  text={<FaTrash />}
                />
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTodo;
