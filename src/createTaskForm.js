import React, { useState } from "react";

function CreateTaskForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);

  const onSubmit =()=>{
    setTitle('')
    setPriority(1)
  }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">
          Priority
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default CreateTaskForm;
