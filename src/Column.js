import React from "react";

const Column = (props) => {
  return (
    <div className="column">
      {props.tasks.map((task) => (
        <div className="card mb-3" key={task.id}>
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p>{task.status}</p>
            <p>{task.priority}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Column;
