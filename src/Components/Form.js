import React from "react";
import { useState } from "react";

export default function Form({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="what is the task today?"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="submit" className="todo-btn">
          add task
        </button>
      </form>
    </div>
  );
}
