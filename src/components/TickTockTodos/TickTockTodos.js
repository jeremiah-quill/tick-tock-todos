import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import TodoList from '../TodoList';
import { format } from 'date-fns';

const TickTockTodos = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const date = new Date();
    const formattedDate = format(date, 'EEEE, MMMM do');
    console.log(typeof formattedDate);
    setDate(formattedDate);
  }, []);
  if (date === null) {
    return null;
  } else
    return (
      <>
        <Navbar />
        <main className="p-10 max-w-screen-sm m-auto mt-16">
          <h1 className="font-bold">{date}</h1>
          <TodoList />
        </main>
      </>
    );
};

export default TickTockTodos;
