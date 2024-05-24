import React, { useState } from "react";
import Form from "./Form";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      todo: todo,
    };
    console.log(newTodo.id);
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (e) => {
    setTodos(todos.filter((todo) => todo.id !== e.id));
    console.log(e.id);
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

  return (
    <div>
      <Form addTodo={addTodo} />
      <h1 className="HH">2 Do List</h1>
      <ul className="main">
        {todos.map((item) => (
          <li key={item.id}>
            {item.todo}
            <button
              id={item.id}
              className="deletebutton"
              onClick={() => {
                if (item) handleDelete(item);
              }}
            >
              Delete
            </button>
            <button
              className="editbutton"
              onClick={() => handleEdit(item.id, item.todo)}
            >
              {" "}
              Edit{" "}
            </button>
            {editingTodo === item.id && (
              <input
                type="text"
                className="intbox"
                value={updatedTodo}
                onChange={(e) => setUpdatedTodo(e.target.value)}
              />
            )}
            {editingTodo === item.id && (
              <button className="updatebtn" onClick={handleUpdate}>
                Update
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
