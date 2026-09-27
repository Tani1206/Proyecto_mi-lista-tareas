import { useState } from "react";

interface Props {
  onAddTodo: (description: string) => void;
}

export const SearchPanel = ({ onAddTodo }: Props) => {
  const [description, setDescription] = useState("");

  const add = () => {
    if (!description.trim()) return;
    onAddTodo(description);
    setDescription("");
  };

  return (
    <div className="add-task">
      <input
        placeholder="Agregar Tareas..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={add}>Agregar</button>
    </div>
  );
};