import React, { useState } from "react";
import Column from "./Column";
import CreateTaskForm from "./createTaskForm";

const initialTasks = [
  { id: 1, title: "Task-1", status: "todo", priority: 1 },
  { id: 2, title: "Task-2", status: "progress", priority: 2 },
  { id: 3, title: "Task-3", status: "review", priority: 3 },
  { id: 4, title: "Task-4", status: "done", priority: 4 },
  { id: 5, title: "Task-5", status: "todo", priority: 5 },
];
const taskStatuses = ["todo", "progress", "review", "done"];
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const onStatusChange = (id, newStatus) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { task, status: newStatus } : task))
    );
  };


  const onCreateTask =(task)=>{
        setTasks([...tasks,{...task,id:Math.random(),status:'todo'}])
  }

  return (
    <div className="container">
      <CreateTaskForm  onSubmit={onCreateTask}/>
      <div className="row">
        {taskStatuses.map((status) => (
          <Column
            key={status}
            tasks={tasks}
            status={status}
            statuses={taskStatuses}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
