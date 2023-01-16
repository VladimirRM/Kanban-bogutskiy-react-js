import React,{useState} from "react";

function CreateTaskForm() {

    const [title,setTitle]=useState('')
    const [priority,setPriority]=useState(1)
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">
          Priority
        </label>
        <input type="text" className="form-control" id="title" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreateTaskForm;
