import React, { useState } from "react";
import Column from "./Column";

const initialTasks = [
  { id: 1, task: "Task-1", status: "todo", priority: 1 },
  { id: 2, task: "Task-2", status: "progress", priority: 2 },
  { id: 3, task: "Task-3", status: "review", priority: 3 },
  { id: 4, task: "Task-4", status: "done", priority: 4 },
  { id: 5, task: "Task-5", status: "todo", priority: 5 },
];
const taskStatuses = ["todo", "progress", "review", "done"];
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="App">
      <Column tasks={tasks} />
    </div>
  );
}

export default App;
