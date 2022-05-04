import React from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import { TodosProvider } from '../../contexts/TodoContext';

const TickTockTodos = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <TodosProvider>
          <TodoForm />
          <TodoList />
        </TodosProvider>
      </main>
    </>
  );
};

export default TickTockTodos;
