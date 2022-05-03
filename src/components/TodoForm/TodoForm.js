import React, { useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const TodoForm = () => {
  const defaultTodoOptions = {
    importance: 1,
    category: 'link',
    completed: false,
    dateAdded: null,
    dateCompleted: null,
    isConfigOpen: false,
  };

  const [inputValue, setInputValue] = useState('');
  const [todoOptions, setTodoOptions] = useState(defaultTodoOptions);

  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue, todoOptions);
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
