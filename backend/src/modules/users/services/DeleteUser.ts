import { getRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';

class DeleteUser {
  public async execute(id: string): Promise<void> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User does not exist');
    }

    await userRepository.remove(user);
  }
}

export default DeleteUser;
