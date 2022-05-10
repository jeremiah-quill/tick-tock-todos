import React, { useContext, useEffect, useState } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import { FaTrash } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import EditorView from '../EditorView';
import Button from '../Button';
import ImportancePicker from '../ImportancePicker';

const ViewTodo = ({ todo, close, color }) => {
  const [levelInputValue, setLevelInputValue] = useState(todo.importance);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const dispatchTodos = useContext(DispatchTodosContext);

  const handleLevelChange = (value) => {
    setLevelInputValue(value);
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

  useEffect(() => {
    dispatchTodos({
      type: 'UPDATE_IMPORTANCE',
      importance: parseInt(levelInputValue),
      id: todo.id,
    });
  }, [levelInputValue]);

  return (
    <div className={`p-5 rounded ${color}`}>
      <button
        onClick={close}
        className="absolute top-5 right-5 hover:backdrop-brightness-150 p-1 rounded">
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
              <nav className="mt-5 flex align-middle w-full">
                <ImportancePicker handleChange={handleLevelChange} currentLevel={todo.importance} />
                <Button
                  type="button"
                  onClick={handleDelete}
                  buttonStyle="hover:backdrop-brightness-150 p-2 rounded ml-auto"
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
