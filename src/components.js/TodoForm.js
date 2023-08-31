import React from "react";
import { useState } from "react";
export const TodoForm = ({ todo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    todo(value);
    setValue("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-style"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="What is the task today"
          value={value}
        />
        <button className="btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};
