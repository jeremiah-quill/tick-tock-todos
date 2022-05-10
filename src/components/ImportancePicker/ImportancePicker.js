import React, { useState, useMemo, useEffect, useContext, useRef } from 'react';
import { FaFlag } from 'react-icons/fa';
import { useClickOutside } from '../../hooks/useClickOutside';

// TODO: replace levels state with a prop
const ImportancePicker = ({ currentLevel, id, handleChange }) => {
  const [levelInputValue, setLevelInputValue] = useState(currentLevel);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [levels, setLevels] = useState([
    { value: 1, color: 'text-red-500' },
    { value: 2, color: 'text-orange-500' },
    { value: 3, color: 'text-yellow-500' },
    { value: 4, color: 'text-blue-500' },
    { value: 5, color: 'text-white' },
  ]);

  // * used to keep track of clicks outside of custom select input
  const ref = useRef();
  const [didClickOutside] = useClickOutside(ref);

  // * when didClickOutside changes, close the custom select input
  useEffect(() => {
    setIsPickerOpen(false);
  }, [didClickOutside]);

  // * on level change we change the levelInputValue to re-calculate memoizedColor
  // * we then run parent's handleChange
  const handleLevelChange = (value) => {
    setLevelInputValue(parseInt(value));
    handleChange(value);
  };

  // * used to calculate chosen color based on level
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

  return (
    <div className="absolute">
      <div
        ref={ref}
        onClick={() => setIsPickerOpen((currState) => !currState)}
        className="bg-black p-2 rounded hover:cursor-pointer">
        {isPickerOpen ? (
          levels.map((level) => (
            <FaFlag
              key={level.value}
              onClick={() => handleLevelChange(level.value)}
              className={`hover:cursor-pointer ${level.color}`}
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
