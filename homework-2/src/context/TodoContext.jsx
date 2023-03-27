import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext({});

const TodoContextProvider = ({ children }) => {
  //States for todos and filtered todos
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn JavaScript",
      completed: true,
    },
    {
      id: 2,
      title: "Learn React",
      completed: false,
    },
    {
      id: 3,
      title: "Have a life!",
      completed: false,
    },
  ]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [activeFilter, setActiveFilter] = useState("all");

  //Filtering todos based on activeFilter
  useEffect(() => {
    switch (activeFilter) {
      case "active":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, activeFilter]);

  //Functions for deleting, toggling, adding, clearing and toggling all todos
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        ...newTodo,
      },
    ]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(
      todos.map((todo) => {
        todo.completed = !allCompleted;
        return todo;
      })
    );
  };

  const data = {
    todos,
    deleteTodo,
    toggleTodo,
    addTodo,
    clearCompleted,
    toggleAll,
    filteredTodos,
    activeFilter,
    setActiveFilter,
  };
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};

//Custom hook for using TodoContext
export const useTodos = () => useContext(TodoContext);

export default TodoContextProvider;
