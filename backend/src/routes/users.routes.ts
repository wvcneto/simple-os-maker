import { Router } from 'express';

import User from '../models/User';

const usersRouter = Router();

const users: User[] = [];

// post
usersRouter.post('/', (request, response) => {
  const { name, email, phone, document, type } = request.body;

  const user = new User({ name, email, phone, document, type });

  users.push(user);

  return response.json(user);
});

// getOne
usersRouter.get('/', (request, response) => {
  return response.json(users);
});

// getAll
usersRouter.get('/', (request, response) => {
  return response.json({ ok: true });
});

// delete
usersRouter.delete('/', (request, response) => {
  return response.json({ ok: true });
});

// put
usersRouter.put('/', (request, response) => {
  return response.json({ ok: true });
});

export default usersRouter;
