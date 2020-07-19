import { Router } from 'express';

import { getRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import CreateUser from '@modules/users/services/CreateUser';
import GetUser from '@modules/users/services/GetUser';
import DeleteUser from '@modules/users/services/DeleteUser';

const usersRouter = Router();

// create
usersRouter.post('/', async (request, response) => {
  const {
    name,
    email,
    phone,
    document,
    type,
    address: { state, city, neighborhood, street, number, complement, zip },
  } = request.body;

  const createUser = new CreateUser();

  const user = await createUser.execute({
    name,
    email,
    phone,
    document,
    type,
    address: { state, city, neighborhood, street, number, complement, zip },
  });

  return response.status(201).json(user);
});

// read
usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const getUser = new GetUser();

  const user = await getUser.execute(id);

  return response.json(user);
});

// index
usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return response.status(200).json(users);
});

// delete
usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteUser = new DeleteUser();

  await deleteUser.execute(id);

  return response.status(204).send();
});

export default usersRouter;
