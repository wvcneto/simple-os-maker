import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateAddress from './CreateAddress';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  phone: string;
  document: string;
  type: string;
  address: {
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
    zip: string;
  };
}

class CreateUser {
  public async execute({
    name,
    email,
    phone,
    document,
    type,
    address: { state, city, neighborhood, street, number, complement, zip },
  }: Request): Promise<User> {
    try {
      const usersRepository = getRepository(User);
      const createAddress = new CreateAddress();

      const checkUserExists = await usersRepository.findOne({
        where: { email },
      });

      if (checkUserExists) {
        throw new AppError('Email address already used.');
      }

      const userAddress = await createAddress.execute({
        state,
        city,
        neighborhood,
        street,
        number,
        complement,
        zip,
      });

      const address_id = userAddress.id;

      const user = usersRepository.create({
        name,
        email,
        phone,
        document,
        type,
        address_id,
      });

      await usersRepository.save(user);

      return user;
    } catch {
      throw new AppError('User does not created.');
    }
  }
}

export default CreateUser;
