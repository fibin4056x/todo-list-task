import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [color, setColor] = useState(false); 

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  const clearAll = () => {
    setTasks([]);
  };

  const toggleTheme = () => {
    setColor(!color);
  };

  const themeStyle = {
    backgroundColor: color ? "black" : "white",
    color: color ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={themeStyle}>
      <h2>📝 Todo List</h2>

      <form>
        <input type="text" value={task} onChange={handleChange} />
        <button onClick={handleAddTask}>Add</button>
      </form>

      <ol style={{
        backgroundColor: color ? "#333" : "#f0f0f0",
        textAlign: "left",
        color: color ? "white" : "black",
        padding: "10px",
        borderRadius: "10px"
      }}>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ol>

      {tasks.length > 0 && <button onClick={clearAll}>Clear All</button>}
      <br /><br />
      <button onClick={toggleTheme}>
        Switch to {color ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default TodoApp;
