import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

// post
usersRouter.post('/', async (request, response) => {
  const { name, email, phone, document, type } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    phone,
    document,
    type,
  });

  return response.json(user);
});

// getOne
usersRouter.get('/', (request, response) => {
  return response.json({ ok: true });
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
