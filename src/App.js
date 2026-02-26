import React from 'react';
import './App.css';
import { AddTodo } from './features/todos/AddTodo';
import { TodoList } from './features/todos/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Todo List</h1>
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
