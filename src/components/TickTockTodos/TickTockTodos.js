import React, { useContext } from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';
import Modal from '../Modal';
import { ModalContext } from '../../contexts/ModalContext';

const TickTockTodos = () => {
  const { isModalOpen, modalContent } = useContext(ModalContext);

  return (
    <>
      {isModalOpen ? <Modal>{modalContent}</Modal> : null}
      <Navbar />
      <main className="pt-16">
        <TodoList />
      </main>
    </>
  );
};

export default TickTockTodos;
