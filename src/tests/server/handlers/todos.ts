import { http, HttpResponse } from 'msw';

import { db } from '../db';
import { getUrl } from '../../test-utils';

export const todos = [
  // Get all items
  http.get(getUrl('/todos'), () => {
    return HttpResponse.json({
      results: db.todos,
    });
  }),

  // Get an item by id
  http.get(getUrl('/todos/:id'), () => {
    return HttpResponse.json(db.todos[0]);
  }),

  // Create a new todo
  http.post('/todos', async ({ request }) => {
    const newTodo = await request.json();

    return HttpResponse.json(newTodo, { status: 201 });
  }),

  // Update todo by id
  http.put('/todos/:id', async ({ request }) => {
    const updatedTodo = await request.json();

    return HttpResponse.json(updatedTodo);
  }),

  // Delete todo by ID
  http.delete('/todos/:id', ({ params }) => {
    const { id } = params;

    const deletedTodo = db.todos.find((todo) => todo.id === id);

    if (!deletedTodo) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(deletedTodo);
  }),
];
