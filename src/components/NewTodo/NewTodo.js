import React, { useContext, useMemo, useState } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import Button from '../Button';
import ImportancePicker from '../ImportancePicker';

const NewTodo = ({ close }) => {
  const [levelInputValue, setLevelInputValue] = useState(5);
  const [titleInputValue, setTitleInputValue] = useState('');
  const [detailsInputValue, setDetailsInputValue] = useState('');

  const dispatchTodos = useContext(DispatchTodosContext);

  // TODO: change importance to be an object: {value: parseInt(levelInputValue), color: memoizedColor}
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTodos({
      type: 'ADD_TODO',
      newTodo: {
        title: titleInputValue,
        details: detailsInputValue,
        importance: parseInt(levelInputValue),
        completed: false,
        dateAdded: new Date(),
        dateCompleted: null,
      },
    });
    setTitleInputValue('');
    setDetailsInputValue('');
    close();
  };

  const handleTitleChange = (e) => {
    setTitleInputValue(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetailsInputValue(e.target.value);
  };

  const handleLevelChange = (value) => {
    setLevelInputValue(value);
  };

  const memoizedColor = useMemo(() => {
    switch (parseInt(levelInputValue)) {
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-orange-500';
      case 3:
        return 'bg-yellow-500';
      case 4:
        return 'bg-blue-200';
      case 5:
        return 'bg-white';
      default:
        return 'bg-purple-400';
    }
  }, [levelInputValue]);

  return (
    <div className={`p-5 rounded ${memoizedColor}`}>
      <form onSubmit={handleSubmit}>
        <input
          className="block w-full text-black p-2 rounded-t"
          placeholder="Title"
          onChange={handleTitleChange}
          required={true}
        />
        <input
          className="block w-full text-black p-2 text-xs rounded-b"
          placeholder="Description"
          onChange={handleDetailsChange}
          required={false}
        />
        <div className="flex w-full">
          <nav className="ml-auto mt-5 mr-5"></nav>
        </div>
        <div className="mt-3 pt-4">
          <div className="flex gap-2">
            <Button type="submit" text="save" buttonStyle="black" />
            <Button type="button" text="cancel" buttonStyle="black" onClick={close} />
            <div>
              <ImportancePicker handleChange={handleLevelChange} currentLevel={5} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
