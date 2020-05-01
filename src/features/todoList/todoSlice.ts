import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from 'app/store'
import { RootState } from 'app/rootReducer';
import { writeTodos, readTodos as fetchTodos } from 'api/jsonstore';
import { Todo } from 'features/todoList/types';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    receiveTodos(state, action: PayloadAction<Todo[]>) {
      return action.payload;
    },
    receiveTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  }
});

export const { toggleTodo } = todoSlice.actions;

export const createTodoList = (): AppThunk => async (dispatch: AppDispatch) => {
  const id = Math.random().toString(36).substr(2, 9);
  window.history.pushState(null, document.title, `${id}`);
}

export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  const todos = await fetchTodos();
  dispatch(todoSlice.actions.receiveTodos(todos))
}

export const addTodo = (
  text: string
): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
  const newTodo: Todo = {
    id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317
    completed: false,
    text: text,
  }

  dispatch(todoSlice.actions.receiveTodo(newTodo));

  writeTodos(getState().todos);
}

export default todoSlice.reducer;