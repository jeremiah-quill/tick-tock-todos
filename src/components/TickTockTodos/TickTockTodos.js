import React from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import { TodosProvider } from '../../contexts/TodoContext';
import { ModalProvider } from '../../contexts/ModalContext';

const TickTockTodos = () => {
  return (
    <>
      <ModalProvider>
        <Navbar />
        <main className="pt-16">
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </main>
      </ModalProvider>
    </>
  );
};

export default TickTockTodos;
