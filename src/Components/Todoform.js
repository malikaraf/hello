import React, { useState } from "react";
import addTodo from "./TodoList";

const Todoform = () => {
  const [value, setvalue] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(value);

    addTodo(value);

    setvalue("");
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={handlesubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="what is the task today?"
          onChange={(e) => setvalue(e.target.value)}
        ></input>
        <button type="submit" className="todo-btn">
          add task
        </button>
      </form>
    </div>
  );
};

export default Todoform;
