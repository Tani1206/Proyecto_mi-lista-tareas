import { useState } from "react";
import { CustomHeader } from "./components/CustomHeader";
import { SearchPanel } from "./components/SearchPanel";
import { FilterButtons } from "./components/FilterButtons";
import { TaskList } from "./components/TaskList";
import { myTodos } from "./db/data";
import type { Todo } from "./db/data";

export const TodoApp = () => {
  const saved = localStorage.getItem("k-todo");
  const [todos, setTodos] = useState<Todo[]>(saved ? JSON.parse(saved) : myTodos);
  const [filter, setFilter] = useState("Todo");

  const save = (list: Todo[]) => { setTodos(list); localStorage.setItem("k-todo", JSON.stringify(list)); };
  const addTodo = (description: string) => description.trim() &&
    save([{ id: Date.now().toString(), description, status: false }, ...todos]);
  const toggleTodo = (id: string) => save(todos.map(t => t.id === id ? { ...t, status: !t.status } : t));
  const deleteTodo = (id: string) => save(todos.filter(t => t.id !== id));
  const filtered = todos.filter(t => filter === "Pendiente" ? !t.status : filter === "Completado" ? t.status : true);

  return (
    <div className="container">
      <CustomHeader title="Mi Lista de Tareas" />
      <SearchPanel onAddTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TaskList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};
