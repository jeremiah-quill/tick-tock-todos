import ConfigView from '../ConfigView';
import StaticTodoView from '../StaticTodoView';

const Todo = ({ todo }) => {
  return (
    <div className="relative">
      <li className="p-5 flex">
        <button>complete</button>
        {todo.isConfigOpen ? (
          <ConfigView text={todo.text} id={todo.id} />
        ) : (
          <StaticTodoView text={todo.text} id={todo.id} />
        )}
      </li>
    </div>
  );
};

export default Todo;
