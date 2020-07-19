import { Request, Response } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUser from '@modules/users/services/CreateUser';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
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
  }

  public async view(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const { id } = request.params;

    const user = await usersRepository.findById(id);

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.index();

    return response.status(200).json(users);
  }
}
