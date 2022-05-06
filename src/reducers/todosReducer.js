import uuid from 'react-uuid';

export default function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuid(), ...action.newTodo }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE_IMPORTANCE':
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, importance: action.importance }
      );
    case 'UPDATE_TODO_TEXT':
      return state.map((todo) => (todo.id !== action.id ? todo : { ...todo, text: action.text }));
    default:
      return state;
  }
}
