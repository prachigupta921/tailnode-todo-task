// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import "../App.css";

function TodoList({ todos, toggleTodo }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
     <div>
     <h2>Active TODOs</h2>
      {activeTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />
      ))}
     </div>
    <div>
    <h2>Completed TODOs</h2>
      {completedTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />
      ))}
    </div>
    </div>
  );
}

export default TodoList;
