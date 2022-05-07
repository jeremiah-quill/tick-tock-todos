import React, { useState, useContext } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import { ModalContext } from '../../contexts/ModalContext';

const EditorView = ({ closeEditor, todo }) => {
  // TODO: set this up
  // const [levelInputValue, setLevelInputValue] = useState(todo.importance);
  const [titleInputValue, setTitleInputValue] = useState(todo.title);
  const [detailsInputValue, setDetailsInputValue] = useState(todo.details);

  const { closeModal } = useContext(ModalContext);
  const dispatchTodos = useContext(DispatchTodosContext);

  const handleTitleChange = (e) => {
    setTitleInputValue(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetailsInputValue(e.target.value);
  };

  // TODO: set this up
  // const handleLevelChange = (e) => {
  //   setLevelInputValue(e.target.value);
  // };

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

  return (
    <div>
      <form onSubmit={handleUpdateSubmit}>
        <div className="border-2 border-black p-2 bg-white">
          <input
            className="block w-full text-black"
            placeholder="Title"
            onChange={handleTitleChange}
            required={true}
            value={titleInputValue}
          />
          <input
            className="block w-full text-black"
            placeholder="Description"
            onChange={handleDetailsChange}
            required={false}
            value={detailsInputValue}
          />
          {/* <div className="flex w-full">
            <nav className="ml-auto mt-5 mr-5">
              <select
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
            </nav>
          </div> */}
          {/* <div className="flex">
            <div className="ml-auto">flag</div>
          </div> */}
        </div>
        <div className="flex gap-3 mt-3">
          <button className="px-2 py-1 border-2" type="submit">
            save
          </button>
          <button className="px-2 py-1 border-2" typoe="button" onClick={closeEditor}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditorView;
