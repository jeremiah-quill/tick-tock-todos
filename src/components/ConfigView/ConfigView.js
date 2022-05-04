import React, { useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

// Todo: add config options on the config bar, and include them on submit
const ConfigView = ({ text, id, closeConfigView }) => {
  const [inputValue, setInputValue] = useState(text);
  const { updateTodoText } = useTodoContext();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateTodoText(id, inputValue);
    closeConfigView(id);
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
