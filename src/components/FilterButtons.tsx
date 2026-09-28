export const FilterButtons = ({ filter, setFilter }: any) => (
  <div className="filters">
    {["Todos", "Pendiente", "Completado"].map(button => (
      <button
        key={button}
        className={filter === button ? "active" : ""}
        onClick={() => setFilter(button)}
      >
        {button}
      </button>
    ))}
  </div>
);
