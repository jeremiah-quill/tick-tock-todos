import React, { useState } from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';
import TodoProvider from '../../contexts/TodoContext';

const TickTockTodos = () => {
  return (
    <>
      <TodoProvider>
        <Navbar />
        <TodoList />
      </TodoProvider>
    </>
  );
};

export default TickTockTodos;
