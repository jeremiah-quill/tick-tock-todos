import React, { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import { FaFlag } from 'react-icons/fa';

const NewTodo = () => {
  const [levelInputValue, setLevelInputValue] = useState(5);
  const [titleInputValue, setTitleInputValue] = useState('');
  const [detailsInputValue, setDetailsInputValue] = useState('');
  const { closeModal } = useContext(ModalContext);
  const dispatchTodos = useContext(DispatchTodosContext);

  const defaultTodoOptions = {
    completed: false,
    dateAdded: null,
    dateCompleted: null,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTodos({
      type: 'ADD_TODO',
      newTodo: {
        title: titleInputValue,
        details: detailsInputValue,
        importance: levelInputValue,
        options: defaultTodoOptions,
      },
    });
    setTitleInputValue('');
    setDetailsInputValue('');
    closeModal();
  };

  const handleTitleChange = (e) => {
    setTitleInputValue(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetailsInputValue(e.target.value);
  };

  const handleLevelChange = (e) => {
    console.log(e.target.value);
    setLevelInputValue(e.target.value);
  };

  return (
    <div className="m-5 absolute inset-0">
      <form onSubmit={handleSubmit}>
        <input
          className="block w-full text-black p-2"
          placeholder="Title"
          onChange={handleTitleChange}
          required={true}
        />
        <input
          className="block w-full text-black p-2"
          placeholder="Description"
          onChange={handleDetailsChange}
          required={false}
        />
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
        <div className="my-3 border-t-2 pt-4">
          <div className="flex mx-3">
            <button className="mr-3 border-2 p-1" type="submit">
              save
            </button>
            <button type="button" className="border-2 p-1" onClick={closeModal}>
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
