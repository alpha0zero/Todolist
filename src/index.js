import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
  rootElement
);
