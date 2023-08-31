import { EditTodoForm } from "./components.js/EditTodoForm";
import { Todo } from "./components.js/Todo";
import { TodoForm } from "./components.js/TodoForm";
import { TodoWrapper } from "./components.js/TodoWrap";

import "./style.css";

export const App = () => {
  return (
    <div className="main-background">
      <TodoWrapper></TodoWrapper>
    </div>
  );
};
