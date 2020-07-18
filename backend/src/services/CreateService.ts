import { getRepository } from 'typeorm';

import Service from '../models/Service';
import AppError from '../errors/AppError';

interface Request {
  type: string;
  name: string;
  description: string;
  code: string;
}

class CreateService {
  public async execute({
    type,
    name,
    description,
    code,
  }: Request): Promise<Service> {
    try {
      const servicesRepository = getRepository(Service);

      const service = servicesRepository.create({
        type,
        name,
        description,
        code,
      });

      await servicesRepository.save(service);

      return service;
    } catch {
      throw new AppError('Service does not created');
    }
  }
}

export default CreateService;
