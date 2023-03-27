import React from "react";
//Hooks
import { useTodos } from "../context/TodoContext";

const TodoListItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  //function for toggling todo
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  //function for deleting todo
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <label>{todo.title}</label>
      <button className="destroy" onClick={handleDelete}></button>
    </div>
  );
};

export default TodoListItem;
