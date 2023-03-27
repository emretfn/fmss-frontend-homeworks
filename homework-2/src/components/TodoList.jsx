import React from "react";
//Hooks
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTodos } from "../context/TodoContext";
//Components
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  //useAutoAnimate hook for animating list items
  const [parent] = useAutoAnimate();
  const { filteredTodos } = useTodos();

  return (
    <ul className="todo-list" ref={parent}>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <TodoListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
