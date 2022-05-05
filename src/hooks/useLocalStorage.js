import { useEffect, useReducer } from 'react';
import todosReducer from '../reducers/todosReducer';

const useLocalStorage = (key, defaultState) => {
  // * Gets current todos, either from local storage or from whatever we pass in as default state (we pass in an empty array in TodoContext)
  const currentTodos = JSON.parse(window.localStorage.getItem(key)) || defaultState;

  // * Rather than use useState to create a piece of state and a setter, we instead call useReducer and get back todos state and the function to modify todos state
  const [todos, dispatchTodos] = useReducer(todosReducer, currentTodos);

  // * Anytime todos or key changes, sync todos to local storage
  // TODO: why do I need key in the dependancy array?  Can I remove it from the array if I memoize the value?
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(todos));
  }, [todos, key]);

  return [todos, dispatchTodos];
};

export default useLocalStorage;
