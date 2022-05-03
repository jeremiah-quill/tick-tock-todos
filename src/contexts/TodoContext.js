import React, { useState, useContext, useEffect } from 'react';

export const TodoContext = React.createContext();

export const useTodoContext = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const initialTodos = [
    {
      id: 1,
      importance: 1,
      category: 'link',
      text: 'test todo 1',
      completed: false,
      dateAdded: null,
      dateCompleted: null,
      isConfigOpen: false,
    },
    {
      id: 2,
      importance: 1,
      category: 'link',
      text: 'test todo 2',
      completed: false,
      dateAdded: null,
      dateCompleted: null,
      isConfigOpen: false,
    },
    {
      id: 3,
      importance: 1,
      category: 'personal',
      text: 'test todo 3',
      completed: true,
      dateAdded: null,
      dateCompleted: null,
      isConfigOpen: false,
    },
    {
      id: 4,
      importance: 1,
      category: 'work',
      text: 'test todo 4',
      completed: false,
      dateAdded: null,
      dateCompleted: null,
      isConfigOpen: false,
    },
    {
      id: 5,
      importance: 1,
      category: 'link',
      text: 'test todo 5',
      completed: false,
      dateAdded: null,
      dateCompleted: null,
      isConfigOpen: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [idCounter, setIdCounter] = useState(initialTodos.length);

  function addTodo(newTodoText, newTodoOptions) {
    let currIdCounter = idCounter;
    setIdCounter((currCount) => currCount + 1);
    const todo = {
      text: newTodoText,
      id: currIdCounter + 1,
      ...newTodoOptions,
    };
    setTodos((currTodos) => [...currTodos, todo]);
  }

  function removeTodo(todoId) {
    setTodos((currTodos) => currTodos.filter((todo) => (todo.id !== todoId ? todo : '')));
  }

  function toggleConfigForm(todoId) {
    setTodos((currTodos) =>
      currTodos.map((todo) =>
        todo.id !== todoId ? todo : { ...todo, isConfigOpen: !todo.isConfigOpen }
      )
    );
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleConfigForm }}>
      {children}
    </TodoContext.Provider>
  );
}
