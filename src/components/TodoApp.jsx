// src/components/TodoApp.js
import React, { useState,useEffect } from 'react';
import TodoList from './TodoList';
import "../App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { text, completed: false }]);
      setText('');
    }
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);


  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(todos));
  },[todos]);

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (

   <>
    <div className='row'>
    <h1>To-Do List</h1>
    <div className='reset-btn'><button onClick={resetTodos} className="reset-button btn btn-lg btn-success mr-20">Reset</button></div>
    </div>
    <div className='row'>
      <div className='col'>
      <input style={{marginTop:"50px"}}
        type="text"
        placeholder="Add a new Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && addTodo()}
        className="form-control form-control-lg"
      />
      </div>
     <div className='col-auto'> <button onClick={addTodo}style={{marginTop:"50px"}} className="btn btn-lg btn-success mr-20">Add</button></div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
   </>
  );
}

export default TodoApp;
