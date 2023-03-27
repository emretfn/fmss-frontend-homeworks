import React, { useState } from "react";

//Hooks
import { useTodos } from "../context/TodoContext";

const Header = ({ onNewTodo }) => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  //function for adding new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0) {
      addTodo({
        id: Date.now(),
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="newTodo"
        />
      </form>
    </header>
  );
};

export default Header;
