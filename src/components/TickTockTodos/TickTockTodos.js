import React, { useContext } from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import { TodosProvider } from '../../contexts/TodoContext';
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
