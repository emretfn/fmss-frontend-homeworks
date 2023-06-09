import React from "react";
import ReactDOM from "react-dom/client";
//Components
import App from "./App";
//Providers
import TodoContextProvider from "./context/TodoContext";
//Styles
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
