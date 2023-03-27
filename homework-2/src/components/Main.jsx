import React from "react";
//Hooks
import { useTodos } from "../context/TodoContext";
//Components
import TodoList from "./TodoList";

const Main = () => {
  const { toggleAll } = useTodos();
  return (
    <section className="main">
      <input
        name="toggle-all"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
    </section>
  );
};

export default Main;
