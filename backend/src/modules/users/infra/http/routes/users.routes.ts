import { Router } from 'express';

import CreateUser from '@modules/users/services/CreateUser';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

const usersRouter = Router();

// create
usersRouter.post('/', async (request, response) => {
  const usersRepository = new UsersRepository();

  const { name, email, phone, document, type } = request.body;

  const createUser = new CreateUser(usersRepository);

  const user = await createUser.execute({
    name,
    email,
    phone,
    document,
    type,
  });

  return response.status(201).json(user);
});

// read
usersRouter.get('/:id', async (request, response) => {
  const usersRepository = new UsersRepository();

  const { id } = request.params;

  const user = await usersRepository.findById(id);

  return response.json(user);
});

// index
usersRouter.get('/', async (request, response) => {
  const usersRepository = new UsersRepository();

  const users = await usersRepository.index();

  return response.status(200).json(users);
});

export default usersRouter;
