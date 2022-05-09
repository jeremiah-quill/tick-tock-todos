import React, { useMemo } from 'react';

const Button = ({ text, buttonStyle, onClick, type }) => {
  const memoizedStyle = useMemo(() => {
    switch (buttonStyle) {
      case 'black':
        return 'py-1 px-3 rounded text-white bg-black hover:bg-gray-800';
      default:
        return buttonStyle;
    }
  }, [buttonStyle]);

  return (
    <button type={type} onClick={onClick} className={memoizedStyle}>
      {text}
    </button>
  );
};

export default Button;
