import React from "react";
//Hooks
import { useTodos } from "../context/TodoContext";

const Footer = () => {
  const { todos, setActiveFilter, activeFilter, clearCompleted } = useTodos();

  //Counting uncompleted todos for footer
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={() => setActiveFilter("active")}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={() => setActiveFilter("completed")}
            className={activeFilter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button onClick={() => clearCompleted()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
