import React, { useContext, useMemo, useState } from 'react';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import { FaFlag } from 'react-icons/fa';

const NewTodo = ({ close }) => {
  const [levelInputValue, setLevelInputValue] = useState(5);
  const [titleInputValue, setTitleInputValue] = useState('');
  const [detailsInputValue, setDetailsInputValue] = useState('');

  const dispatchTodos = useContext(DispatchTodosContext);

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

  const handleLevelChange = (e) => {
    setLevelInputValue(e.target.value);
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
          className="block w-full text-black p-2"
          placeholder="Title"
          onChange={handleTitleChange}
          required={true}
        />
        <input
          className="block w-full text-black p-2 text-xs"
          placeholder="Description"
          onChange={handleDetailsChange}
          required={false}
        />
        <div className="flex w-full">
          <nav className="ml-auto mt-5 mr-5">
            {/* <button type="button" onClick={() => console.log('opened importance picker')}>
              <FaFlag />
            </button> */}
            <select
              className="rounded"
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
        </div>
        <div className="mt-3 border-t-2 pt-4">
          <div className="flex mx-3">
            <button
              className="mr-3 py-1 px-3 rounded text-white bg-black hover:bg-gray-800"
              type="submit">
              save
            </button>
            <button
              type="button"
              className="py-1 px-3 rounded text-white bg-black hover:bg-gray-800"
              onClick={close}>
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
