import React, { useEffect, useMemo, useState } from 'react';

const LevelPicker = () => {
  const [levelInput, setLevelInput] = useState(5);

  function handleLevelChange(e) {
    setLevelInput(e.target.value);
  }

  const levels = [1, 2, 3, 4, 5];

  return (
    <div className="relative">
      <select name="levels" id="levels" value={levelInput} onChange={handleLevelChange}>
        {levels.map((level) => (
          <option key={level} value={level}>
            Importance: {` ${level}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LevelPicker;
