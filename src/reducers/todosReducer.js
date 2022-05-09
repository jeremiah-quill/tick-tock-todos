import uuid from 'react-uuid';

export default function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuid(), ...action.newTodo }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE_IMPORTANCE':
      console.log(action.id, typeof action.id);
      console.log(action.importance, typeof action.importance);
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, importance: action.importance }
      );
    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : { ...todo, title: action.updatedTitle, details: action.updatedDetails }
      );
    case 'UPDATE_TODO_TEXT':
      return state.map((todo) => (todo.id !== action.id ? todo : { ...todo, text: action.text }));
    default:
      return state;
  }
}
