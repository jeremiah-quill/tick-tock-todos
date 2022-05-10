import React, { useState, useMemo, useEffect, useContext, useRef } from 'react';
import { FaFlag } from 'react-icons/fa';
import { DispatchTodosContext } from '../../contexts/TodoContext';
import { useClickOutside } from '../../hooks/useClickOutside';

const ImportancePicker = ({ currentLevel, id, handleChange }) => {
  const [levelInputValue, setLevelInputValue] = useState(currentLevel);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [levels, setLevels] = useState([1, 2, 3, 4, 5]);

  const dispatchTodos = useContext(DispatchTodosContext);

  const ref = useRef();

  useClickOutside(ref, () => {
    setIsPickerOpen(false);
  });

  const mapLevelToColor = (value) => {
    switch (parseInt(value)) {
      case 1:
        return 'text-red-500';
      case 2:
        return 'text-orange-500';
      case 3:
        return 'text-yellow-500';
      case 4:
        return 'text-blue-200';
      case 5:
        return 'text-white';
      default:
        return 'text-purple-400';
    }
  };

  const handleLevelChange = (value) => {
    setLevelInputValue(parseInt(value));
    handleChange(value);
  };

  const memoizedColor = useMemo(() => {
    switch (parseInt(levelInputValue)) {
      case 1:
        return 'text-red-500';
      case 2:
        return 'text-orange-500';
      case 3:
        return 'text-yellow-500';
      case 4:
        return 'text-blue-200';
      case 5:
        return 'text-white';
      default:
        return 'text-purple-400';
    }
  }, [levelInputValue]);

  useEffect(() => {
    dispatchTodos({
      type: 'UPDATE_IMPORTANCE',
      importance: levelInputValue,
      id: id,
    });
  }, [levelInputValue]);

  return (
    <div className="absolute">
      <div
        ref={ref}
        onClick={() => setIsPickerOpen((currState) => !currState)}
        className="bg-black p-2 rounded hover:cursor-pointer">
        {isPickerOpen ? (
          levels.map((level) => (
            <FaFlag
              key={level}
              onClick={(e) => handleLevelChange(level)}
              className={`hover:cursor-pointer ${mapLevelToColor(level)}`}
            />
          ))
        ) : (
          <FaFlag className={`hover:cursor-pointer ${memoizedColor}`} />
        )}
      </div>
    </div>
  );
};

export default ImportancePicker;
