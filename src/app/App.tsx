import React from 'react';
import './App.css';
import TodoList from 'features/todoList/TodoList';
import AddTodo from 'features/todoList/AddTodo';

export default function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}