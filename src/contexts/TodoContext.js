import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import uuid from 'react-uuid';

export const TodoContext = React.createContext();
export const useTodoContext = () => useContext(TodoContext);

// * this is the structure of a todo:
// const todo = {
//   importance: 1,
//   category: 'link',
//   text: 'test todo 5',
//   completed: false,
//   dateAdded: null,
//   dateCompleted: null,
//   isConfigOpen: false,
// };
export default function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todos', []);

  function addTodo(newTodoText, newTodoOptions) {
    const todo = {
      text: newTodoText,
      id: uuid(),
      ...newTodoOptions,
    };

    setTodos((currTodos) => [...currTodos, todo]);
  }

  function removeTodo(todoId) {
    setTodos((currTodos) => currTodos.filter((todo) => (todo.id !== todoId ? todo : '')));
  }

  function updateTodoText(todoId, updatedTodoText) {
    setTodos((currTodos) =>
      currTodos.map((todo) => (todo.id !== todoId ? todo : { ...todo, text: updatedTodoText }))
    );
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodoText }}>
      {children}
    </TodoContext.Provider>
  );
}
