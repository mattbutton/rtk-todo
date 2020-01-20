import React from 'react';
import './App.css';
import TodoList from 'features/todoList/TodoList';
import AddTodo from 'features/todoList/AddTodo';
import Footer from 'features/visibilityFilter/Footer';

export default function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}