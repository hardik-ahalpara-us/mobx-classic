import { createContext } from "react";
import { makeObservable, observable, computed, action } from "mobx";

export class Todos {
  todos = [
    { id: 1, text: "Buy eggs", completed: true },
    { id: 2, text: "Write a post", completed: false },
  ];
  constructor(value) {
    makeObservable(this, {
      todos: observable,
      remainingTodos: computed,
      addTodo: action,
    });
    this.value = value;
  }
  get remainingTodos() {
    return this.todos.filter((t) => !t.completed).length;
  }
  addTodo(text) {
    this.todos.push({ id: "1234", text, completed: false });
  }

  toggleTodo = (index) => {
    this.todos[index].completed = !this.todos[index].completed;
  };
}

// decorate(Todos, );

export default createContext(new Todos());
