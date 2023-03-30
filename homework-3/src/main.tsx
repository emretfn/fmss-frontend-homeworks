import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Weather icons css
import "weather-react-icons/lib/css/weather-icons.css";

//Chakra UI imports
import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./lib/theme";

//Context provider
import WeatherContextProvider from "./context/WeatherContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </WeatherContextProvider>
  </React.StrictMode>
);
