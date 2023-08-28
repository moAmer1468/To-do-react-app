import "./style.css";
import "./data";
import { TodoItem } from "./components/todoItems/todoItem";
import { AddItem } from "./components/AddItems/addItem";
import { useState } from "react";
import dummyPeople from "./data";
import { SimpleHeader } from "./components/simpleHeader";
function App() {
  //we need to get all items in a variable using the state uaAmer
  const [todos, setTodosState] = useState(dummyPeople);

  // we need to make simple function to delete item via id
  const deleteItem = (id) => {
    const remainedItems = todos.filter((ele, index, arr) => {
      return ele.id !== id;
    }, this);
    setTodosState(remainedItems); //This is made to update the variable uaamer
  };

  const addTodo = (newObject) => {
    if (newObject.name !== "" || newObject.age !== "") {
      const newTodos = [...todos, newObject]; // This will take a shadow From the last todos and append the new One
      setTodosState(newTodos);
    }
  };
  return (
    <div className="font container">
      <h2 style={{ textAlign: "center", color: "red" }}>
        MohamedAmerSimpleTodoApplication
      </h2>
      <SimpleHeader></SimpleHeader>
      <TodoItem deleteItem={deleteItem} todos={todos}></TodoItem>
      <AddItem todos={todos} addTodo={addTodo}></AddItem>
    </div>
  );
}

export default App;
