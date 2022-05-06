import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodosContext = React.createContext();
export const DispatchTodosContext = React.createContext();

// * this is the structure of a todo:
// const todo = {
//   importance: 1,
//   category: 'link',
//   title: 'test todo 5',
//   details: 'details',
//   completed: false,
//   dateAdded: null,
//   dateCompleted: null,
//   isConfigOpen: false,
// };
export function TodosProvider({ children }) {
  // * here we get the todos state and the dispatch to modify the state through our local storage hook, which uses useReducer on our todosReducer
  const [todos, dispatchTodos] = useLocalStorage('todos', []);

  todos.sort((a, b) => a.importance - b.importance);

  // * returning todos and dispatch in separate contexts so we can consume only the context values that we need in each file
  return (
    <TodosContext.Provider value={todos}>
      <DispatchTodosContext.Provider value={dispatchTodos}>
        {children}
      </DispatchTodosContext.Provider>
    </TodosContext.Provider>
  );
}
