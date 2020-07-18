import { Router } from 'express';

import { getRepository } from 'typeorm';
import CreateUser from '../services/CreateUser';
import User from '../models/User';

const usersRouter = Router();

// post
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

// list
usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return response.status(200).json(users);
});

export default usersRouter;
