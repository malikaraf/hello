import logo from "./logo.svg";
import "./App.css";
import Todoform from "./Components/Todoform";
import React, { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      {/* <div className="header">
        <h2>List or whatever</h2>
      </div>

      <div className="ok1">
        <Todoform />
      </div> */}
      <div>
        <div className="ok2"></div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
