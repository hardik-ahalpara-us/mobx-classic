import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import TodoStore from "./TodoStore";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./styles.css";

const App = observer(() => {
  const store = useContext(TodoStore);
  const [todo, setTodo] = React.useState("");
  console.log(todo);
  return (
    <div className="App">
      <h2>A Todo App yet again!</h2>
      <TodoList todos={store.todos} toggleTodo={store.toggleTodo} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          store.addTodo(todo);
          // myChangeHandler(e)
        }}
      >
        <input name="todo" onChange={(e) => setTodo(e.target.value)}></input>
        <button type="submit">submit</button>
      </form>
      <Footer remaining={store.remainingTodos} total={store.todos.length} />
    </div>
  );
});

// const rootElement = document.getElementById("root");
export default App;
