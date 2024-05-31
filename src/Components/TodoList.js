import React, { useState } from "react";
import Form from "./Form";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      todo,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, todo) => {
    setEditingTodo(id);
    setUpdatedTodo(todo);
  };

  const handleUpdate = () => {
    if (editingTodo !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo ? { ...todo, todo: updatedTodo } : todo
        )
      );
      setEditingTodo(null);
      setUpdatedTodo("");
    }
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const activeTodos = todos.filter((todo) => !todo.done);
  const doneTodos = todos.filter((todo) => todo.done);

  return (
    <div className="todo-list-container">
      <Form addTodo={addTodo} />
      <h1 className="title">To Do List</h1>
      <ul className="todo-list">
        {activeTodos.map((item) => (
          <li key={item.id} className="todo-item">
            <span>{item.todo}</span>
            <div className="buttons">
              <button className="done-btn" onClick={() => toggleDone(item.id)}>
                Done
              </button>
              <button
                className="edit-btn"
                onClick={() => handleEdit(item.id, item.todo)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
            {editingTodo === item.id && (
              <div className="edit-form">
                <input
                  type="text"
                  value={updatedTodo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h2 className="title">Done Todos</h2>
      <ul className="todo-list done">
        {doneTodos.map((item) => (
          <li key={item.id} className="todo-item done">
            <span>{item.todo}</span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
