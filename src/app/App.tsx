import React from 'react';
import './App.css';
import TodoList from 'features/todoList/TodoList';
import AddTodo from 'features/todoList/AddTodo';
import Footer from 'features/visibilityFilter/Footer';
import { useDispatch } from 'react-redux';
import { loadTodos, createTodoList } from 'features/todoList/todoSlice';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.location.pathname === '/'){
      dispatch(createTodoList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);

  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}