import uuid from 'react-uuid';

export default function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, id: uuid(), ...action.options }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE_TODO_TEXT':
      return state.map((todo) => (todo.id !== action.id ? todo : { ...todo, text: action.text }));
    default:
      return state;
  }
}
