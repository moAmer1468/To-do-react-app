import React from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo-style">
      <p
        className={`${task.completed ? "completed" : ""}`} // just is used to make some styles like lineThrough
        onClick={() => {
          toggleComplete(task.id);
        }}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="icon-style"
          icon={faPenToSquare}
          onClick={() => {
            editTodo(task.id);
          }}
        />
      </div>

      <div>
        <FontAwesomeIcon
          style={{ color: "#025EC9" }}
          icon={faTrash}
          onClick={(e) => {
            deleteTodo(task.id);
            console.log(task.id);
          }}
        />
      </div>
    </div>
  );
};
