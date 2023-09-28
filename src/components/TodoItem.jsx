// src/components/TodoItem.js
import React from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function TodoItem({ todo, toggleTodo }) {

 
  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={toggleTodo}
    >
      <div className="col taskBg">
      <span className="taskText">{todo.text}</span> <FontAwesomeIcon icon={faCircleCheck} />
      </div>
    </div>
  );
}
export default TodoItem;
