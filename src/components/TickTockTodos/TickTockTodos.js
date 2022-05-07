import React from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';

const TickTockTodos = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <TodoList />
      </main>
    </>
  );
};

export default TickTockTodos;
