import { getRepository } from 'typeorm';

import Address from '@modules/users/infra/typeorm/entities/Address';
import AppError from '@shared/errors/AppError';

interface Request {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
  zip: string;
}

class CreateAddress {
  public async execute({
    state,
    city,
    neighborhood,
    street,
    number,
    complement,
    zip,
  }: Request): Promise<Address> {
    try {
      const addressRepository = getRepository(Address);

      const address = addressRepository.create({
        state,
        city,
        neighborhood,
        street,
        number,
        complement,
        zip,
      });

      await addressRepository.save(address);

      return address;
    } catch {
      throw new AppError('Address does not created.');
    }
  }
}

export default CreateAddress;
