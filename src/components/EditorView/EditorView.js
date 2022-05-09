import React, { useState, useContext, useEffect } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import Button from '../Button';

const EditorView = ({ closeEditor, todo, handleLevelChange, levelInputValue }) => {
  const [titleInputValue, setTitleInputValue] = useState(todo.title);
  const [detailsInputValue, setDetailsInputValue] = useState(todo.details);

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
  }, [levelInputValue, todo.importance]);

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
          <div className="flex w-full">
            <nav className="ml-auto mt-5 mr-5">
              <select
                className="rounded"
                name="levels2"
                id="levels2"
                value={levelInputValue}
                onChange={handleLevelChange}>
                <option value={5}>Importance: 5</option>
                <option value={4}>Importance: 4</option>
                <option value={3}>Importance: 3</option>
                <option value={2}>Importance: 2</option>
                <option value={1}>Importance: 1</option>
              </select>
            </nav>
          </div>
          {/* <div className="flex">
            <div className="ml-auto">flag</div>
          </div> */}
        </div>
        <div className="flex mt-3">
          <Button type="submit" text="save" style="black" />
          <Button type="button" text="cancel" style="black" onClick={closeEditor} />
        </div>
      </form>
    </div>
  );
};

export default EditorView;
