import { createContext } from "react";
import { makeObservable, observable, computed } from "mobx";

export class Todos {
  todos = [
    { id: 1, text: "Buy eggs", completed: true },
    { id: 2, text: "Write a post", completed: false },
  ];
  constructor(value) {
    makeObservable(this, {
      todos: observable,
      remainingTodos: computed,
    });
    this.value = value;
  }
  get remainingTodos() {
    return this.todos.filter((t) => !t.completed).length;
  }

  toggleTodo = (index) => {
    this.todos[index].completed = !this.todos[index].completed;
  };
}

// decorate(Todos, );

export default createContext(new Todos());
