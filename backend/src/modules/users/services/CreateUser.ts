import User from '@modules/users/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  document: string;
  type: string;
}

class CreateUser {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    name,
    email,
    phone,
    document,
    type,
  }: IRequest): Promise<User> {
    try {
      const checkUserExists = await this.usersRepository.findByEmail(email);

      if (checkUserExists) {
        throw new AppError('Email address already used.');
      }

      const user = await this.usersRepository.create({
        name,
        email,
        phone,
        document,
        type,
      });

      return user;
    } catch {
      throw new AppError('User does not created.');
    }
  }
}

export default CreateUser;
