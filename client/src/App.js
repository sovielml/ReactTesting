import React from 'react';
import './App.css';
import ToDoFrom from './components/ToDoFrom';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="todo-app">
      <h1>
        To-Do App
      </h1>
        <ToDoFrom/>
        <ToDoList/>
    </div>
  );
}

export default App;
