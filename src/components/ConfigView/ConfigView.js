import React, { useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const ConfigView = ({ text, id }) => {
  const [inputValue, setInputValue] = useState(text);

  const { toggleConfigForm, updateTodoText } = useTodoContext();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateTodoText(id, inputValue);
    toggleConfigForm(id);
  }

  return (
    <>
      <div
        style={{ transform: 'translateY(-100%)' }}
        className="absolute inset-x-0 bg-black text-white py-3">
        config bar
      </div>
      <form className="flex" onSubmit={handleUpdate}>
        <input className="mx-3" value={inputValue} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default ConfigView;
