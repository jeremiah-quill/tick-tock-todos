import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext';
import Todo from '../Todo';
import TodoForm from '../TodoForm';

const TodoList = () => {
  const { todos } = useTodoContext();
  return (
    <div className="max-w-full bg-red-400 text-neutral-800 pt-16">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
