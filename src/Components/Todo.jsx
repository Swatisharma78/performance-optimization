import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import TodoItems from "./TodoItems";
const initialState = [
  { id: 1, status: false, title: "Task 1" },
  { id: 2, status: false, title: "Task 2" },
  { id: 3, status: false, title: "Task 3" },
];
const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleInputChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTask = () => {
    if (currentTodo) {
      const payload = {
        id: todos.length + 1,
        status: false,
        title: currentTodo,
      };
      setTodos([...todos, payload]);
      setCurrentTodo("");
    }
  };
  //useEffect(()=>{
  //login
  //}, [value])

  // useCallback(()=>{
  //function()
  //},[value])

  const toggleStatus = useCallback(
    (id) => {
      let newTodos = todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setTodos(newTodos);
    },
    [todos]
  );
  const deleteTask = useCallback(
    (id) => {
      let newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
    },
    [todos]
  );
  return (
    <div>
      <h1>Todo Application</h1>
      <input value={currentTodo} onChange={handleInputChange} />
      <button onClick={handleAddTask}>ADD</button>
      {todos.length &&
        todos.map((item) => {
          return (
            <TodoItems
              key={item.id}
              {...item}
              toggleStatus={toggleStatus}
              deleteTask={deleteTask}
            />
          );
        })}
    </div>
  );
};

export default Todo;
