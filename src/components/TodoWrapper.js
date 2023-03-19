import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isediting: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = id => {


  }
  
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
