import React, { useMemo } from 'react';

const Button = ({ text, style, onClick, type }) => {
  const memoizedStyle = useMemo(() => {
    switch (style) {
      case 'black':
        return 'mr-3 py-1 px-3 rounded text-white bg-black hover:bg-gray-800';
      default:
        return style;
    }
  }, [style]);

  return (
    <button type={type} onClick={onClick} className={memoizedStyle}>
      {text}
    </button>
  );
};

export default Button;
