import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodoContext';
import Todo from '../Todo';

const TodoList = () => {
  const todos = useContext(TodosContext);

  return (
    <div className="max-w-full bg-red-400 text-neutral-800">
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoList;
