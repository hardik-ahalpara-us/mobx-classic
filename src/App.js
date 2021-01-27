import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import TodoStore from "./TodoStore";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./styles.css";

const App = observer(() => {
  const store = useContext(TodoStore);
  return (
    <div className="App">
      <h2>A Todo App yet again!</h2>
      <TodoList todos={store.todos} toggleTodo={store.toggleTodo} />
      <Footer remaining={store.remainingTodos} total={store.todos.length} />
    </div>
  );
});

// const rootElement = document.getElementById("root");
export default App;
