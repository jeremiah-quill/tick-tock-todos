import React, { useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import todosReducer from '../reducers/todosReducer';

export const TodosContext = React.createContext();
export const DispatchTodosContext = React.createContext();
// export const useTodoContext = () => useContext(TodoContext);

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
export function TodosProvider({ children }) {
  const [todos, dispatchTodos] = useReducer(todosReducer, [
    {
      importance: 1,
      category: 'link',
      text: 'placeholder todo',
      completed: false,
      dateAdded: null,
      dateCompleted: null,
      isConfigOpen: false,
      id: 1,
    },
  ]);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchTodosContext.Provider value={dispatchTodos}>
        {children}
      </DispatchTodosContext.Provider>
    </TodosContext.Provider>
  );
}
