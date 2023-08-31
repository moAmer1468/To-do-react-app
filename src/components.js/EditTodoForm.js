import React from "react";
import { useState } from "react";
export const EditTodoForm = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-style edit"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="update Task"
          value={value}
        />
        <button className="btn hover" type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
};
