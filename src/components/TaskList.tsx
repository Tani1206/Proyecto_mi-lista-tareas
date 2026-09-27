import type { Todo } from "../db/data";
interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList = ({ todos, onToggle, onDelete }: Props) => (
  <div className="task-list">
    {todos.map(todo => (
      <div className="task" key={todo.id}>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.status ? "done" : ""}>
          {todo.description}
        </span>
        <span className="status">
          {todo.status ? "Completada" : "Pendiente"}
        </span>
        <button className="icon ok" onClick={() => onToggle(todo.id)}>✅</button>
        <button className="icon delete" onClick={() => onDelete(todo.id)}>🗑</button>
      </div>
    ))}
  </div>
);