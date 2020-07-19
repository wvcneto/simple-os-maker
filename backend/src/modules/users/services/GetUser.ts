import { getRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';

class GetUser {
  public async execute(id: string): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User does not exist.');
    }

    return user;
  }
}

export default GetUser;
