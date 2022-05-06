import React, { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import { FaFlag } from 'react-icons/fa';
// import LevelPicker from '../LevelPicker'

const NewTodo = () => {
  const [titleInputValue, setTitleInputValue] = useState('');
  const [detailsInputValue, setDetailsInputValue] = useState('');
  const { closeModal } = useContext(ModalContext);
  const dispatchTodos = useContext(DispatchTodosContext);

  const defaultTodoOptions = {
    importance: 1,
    category: 'link',
    completed: false,
    dateAdded: null,
    dateCompleted: null,
  };

  // Todo: uncomment this and use it for setting options?
  // const [todoOptions, setTodoOptions] = useState(defaultTodoOptions);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTodos({
      type: 'ADD_TODO',
      newTodo: {
        title: titleInputValue,
        details: detailsInputValue,
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
            <button type="button" onClick={() => console.log('opened importance picker')}>
              <FaFlag />
            </button>
          </nav>
        </div>
        {/* <LevelPicker changeLevel={pickImportance} levels={levels}/> */}
        {/* <ul> */}
        {/* <li>Importance: 1</li> */}
        {/* <li>Importance: 2</li> */}
        {/* <li>Importance: 3</li> */}
        {/* <li>Importance: 4</li> */}
        {/* </ul> */}
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
