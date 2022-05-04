import React from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';
import TodosProvider from '../../contexts/TodoContext';

const TickTockTodos = () => {
  return (
    <>
      <TodosProvider>
        <Navbar />
        <TodoList />
      </TodosProvider>
    </>
  );
};

export default TickTockTodos;
