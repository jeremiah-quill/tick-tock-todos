import React, { useState, useContext, useEffect } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import Button from '../Button';
import ImportancePicker from '../ImportancePicker';

const EditorView = ({ closeEditor, todo }) => {
  const [titleInputValue, setTitleInputValue] = useState(todo.title);
  const [detailsInputValue, setDetailsInputValue] = useState(todo.details);
  const [levelInputValue, setLevelInputValue] = useState(todo.importance);

  const handleLevelChange = (value) => {
    setLevelInputValue(value);
  };

  const dispatchTodos = useContext(DispatchTodosContext);

  const handleTitleChange = (e) => {
    setTitleInputValue(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetailsInputValue(e.target.value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatchTodos({
      type: 'UPDATE_TODO',
      updatedTitle: titleInputValue,
      updatedDetails: detailsInputValue,
      id: todo.id,
    });
    closeEditor();
  };

  useEffect(() => {
    dispatchTodos({
      type: 'UPDATE_IMPORTANCE',
      importance: parseInt(levelInputValue),
      id: todo.id,
    });
  }, [levelInputValue, dispatchTodos, todo.id]);

  return (
    <div>
      <form onSubmit={handleUpdateSubmit}>
        <div className="rounded p-2 bg-white">
          <input
            className="block w-full text-black"
            placeholder="Title"
            onChange={handleTitleChange}
            required={true}
            value={titleInputValue}
          />
          <input
            className="block w-full text-black text-xs"
            placeholder="Description"
            onChange={handleDetailsChange}
            required={false}
            value={detailsInputValue}
          />
        </div>
        <div className="flex w-full mt-5 gap-2">
          <Button type="submit" text="save" buttonStyle="black" />
          <Button type="button" text="cancel" buttonStyle="black" onClick={closeEditor} />
          <div>
            <ImportancePicker handleChange={handleLevelChange} currentLevel={todo.importance} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditorView;
