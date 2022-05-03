import React, { useEffect, useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const Todo = ({ todo }) => {
  const [inputValue, setInputValue] = useState(null);

  const { removeTodo, toggleConfigForm, updateTodoText } = useTodoContext();

  function handleDelete() {
    removeTodo(todo.id);
  }

  function handleToggleConfigForm() {
    toggleConfigForm(todo.id);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateTodoText(todo.id, inputValue);
    toggleConfigForm(todo.id);
  }

  useEffect(() => {
    setInputValue(todo.text);
    return () => setInputValue(null);
  }, [todo.isConfigOpen]);

  return (
    <li className="p-5 flex">
      <button>complete</button>
      {todo.isConfigOpen ? (
        <form onSubmit={handleUpdate}>
          {' '}
          <input className="mx-3" value={inputValue} onChange={handleChange} />{' '}
          <button type="submit">Update</button>
        </form>
      ) : (
        <div className="mx-3">{todo.text}</div>
      )}

      <div className="flex ml-auto gap-3">
        <button onClick={handleToggleConfigForm}>config</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </li>
  );
};

export default Todo;
