import "./Task.css";

export function TaskCard({ ready }) {
  const titleStyles = { fontWeight: "bold" };

  return (
    <div className="card">
      <h1 style={titleStyles}>Mi primer tarea</h1>
      <p className={ready ? "bg-green" : "bg-red"}>
        {ready === true ? "tarea realizada" : "Tarea pendiente"}
      </p>
    </div>
  );
}
