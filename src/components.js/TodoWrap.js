import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import "../style.css";

uuidv4(); // this is used to initialize this one
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo !== "") {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, isEditing: false, completed: false },
      ]);
    }
  };

  const handleToggle = (id) => {
    const newArray = todos.map((ele, index, arr) => {
      return ele.id === id
        ? {
            ...ele,
            id: ele.id,
            task: ele.task,
            isEditing: ele.isEditing,
            completed: !ele.completed,
          }
        : ele;
    }, this);
    setTodos(newArray);
  };

  const handleDelete = (id) => {
    const afterDelete = todos.filter((ele, index, arr) => {
      return ele.id !== id;
    }, this);
    setTodos(afterDelete);
  };

  const handleEdit = (id) => {
    const newArray = todos.map((ele, index, arr) => {
      return ele.id === id
        ? {
            ...ele,
            id: ele.id,
            task: ele.task,
            isEditing: !ele.isEditing,
            completed: ele.completed,
          }
        : ele;
    }, this);
    setTodos(newArray);
  };

  const handleEditTodo = (value, task_id) => {
    const newArray = todos.map((ele, index, arr) => {
      return ele.id === task_id
        ? {
            ...ele,
            id: ele.id,
            task: value,
            isEditing: !ele.isEditing,
            completed: ele.completed,
          }
        : ele;
    }, this);
    setTodos(newArray);
  };

  return (
    <div className="container">
      <h2 className="heading">To Do List </h2>
      <TodoForm todo={addTodo}></TodoForm>
      {todos.length >= 1 ? (
        todos.map((ele, index, arr) => {
          console.log(ele.isEditing);
          return ele.isEditing ? (
            <EditTodoForm editTodo={handleEditTodo} task={ele} />
          ) : (
            <Todo
              task={ele}
              key={index}
              toggleComplete={handleToggle}
              deleteTodo={handleDelete}
              editTodo={handleEdit}
            ></Todo>
          );
        }, this)
      ) : (
        <h2 style={{ textAlign: "center" }}>There are no todos</h2>
      )}
      <div className="footer">Mohamed Alaa amer &copy; 2023</div>
    </div>
  );
};
