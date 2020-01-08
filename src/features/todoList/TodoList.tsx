import React from 'react'
import TodoListItem from './TodoListItem'
import { RootState } from 'app/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector(
      (state: RootState) => state.todos
  );

  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo))} />

      ))}
    </ul>
  );
}