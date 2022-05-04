import React, { useState, useContext } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';

const TodoForm = () => {
  const defaultTodoOptions = {
    importance: 1,
    category: 'link',
    completed: false,
    dateAdded: null,
    dateCompleted: null,
  };

  const [inputValue, setInputValue] = useState('');
  // Todo: uncomment this and use it for setting options?
  // const [todoOptions, setTodoOptions] = useState(defaultTodoOptions);

  const dispatchTodos = useContext(DispatchTodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTodos({ type: 'ADD_TODO', text: inputValue, options: defaultTodoOptions });
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const openTodoConfig = (e) => {
    console.log('clicked config');
  };

  return (
    <div className="flex">
      <form className="flex grow" onSubmit={handleSubmit}>
        <input className="grow" type="text" onChange={handleChange} value={inputValue} />
        <button className="mr-3" type="submit">
          Add
        </button>
      </form>
      <button onClick={openTodoConfig}>config</button>
    </div>
  );
};

export default TodoForm;
