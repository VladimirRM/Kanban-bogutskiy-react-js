import React from "react";

const Column = (props) => {
  console.log(props.tasks);
  return (
    <div className="col">
      <h3>{props.status}</h3>
      {props.tasks
        .filter((task) => task.status === props.status)
        .map((task) => (
          <div className="card mb-4" key={task.id}>
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p>{task.status}</p>
              <p>{task.priority}</p>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={props.status}
              >
                {props.statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Column;
