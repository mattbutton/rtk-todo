import axios from 'axios'
import { Todo } from 'features/todoList/types';

const baseUrl = 'https://www.jsonstore.io/0325ffacd673db762850eb3152b9242526a58eb84933fdd7464dd07b4fc60124'

interface GetTodosResponse {
    result: Todo[],
    ok: boolean
}

export async function readTodos(): Promise<Todo[]> {
    const response = await axios.get<GetTodosResponse>(baseUrl + window.location.pathname, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
    });

    return response.data.result;
}

export async function writeTodos(todos: Todo[]) {
    await axios.put<Todo[]>(baseUrl + window.location.pathname, todos, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
    });
}