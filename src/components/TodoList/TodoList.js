import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodoContext';
import Todo from '../Todo';
import { motion } from 'framer-motion';

const TodoList = () => {
  const todos = useContext(TodosContext);

  const list = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="max-w-full text-neutral-800">
      {todos.length > 0 ? (
        <motion.ul initial="initial" animate="animate" variants={list}>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </motion.ul>
      ) : null}
    </div>
  );
};

export default TodoList;
