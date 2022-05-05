import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

const ViewTodo = ({ todo }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="inset-0 absolute m-5">
      <button onClick={closeModal} className="absolute top-0 right-0">
        close
      </button>
      <div className="text-left mt-10">
        <h1> {todo.title}</h1>
        <p className="text-xs">{todo.details}</p>
      </div>
      <div className="flex w-full">
        <button className="ml-auto">Importance</button>
      </div>
      {/* <ul> */}
      {/* <li>Importance: 1</li> */}
      {/* <li>Importance: 2</li> */}
      {/* <li>Importance: 3</li> */}
      {/* <li>Importance: 4</li> */}
      {/* </ul> */}
    </div>
  );
};

export default ViewTodo;
