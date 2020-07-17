import { getRepository } from 'typeorm';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  phone: string;
  document: string;
  type: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    phone,
    document,
    type,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }

    const user = usersRepository.create({
      name,
      email,
      phone,
      document,
      type,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
