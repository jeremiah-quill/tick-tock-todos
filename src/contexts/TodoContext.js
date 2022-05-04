import React, { useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import todoReducer from '../reducers/todoReducer';

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
  const [todos, dispatchTodos] = useReducer(todoReducer, []);

  return <TodoContext.Provider value={{ todos, dispatchTodos }}>{children}</TodoContext.Provider>;
}
