import { getRepository } from 'typeorm';

import Service from '@modules/_services/infra/typeorm/entities/Service';
import AppError from '@shared/errors/AppError';

class GetService {
  public async execute(id: string): Promise<Service> {
    const servicesRepository = getRepository(Service);

    const service = await servicesRepository.findOne(id);

    if (!service) {
      throw new AppError('Service does not exist.');
    }

    return service;
  }
}

export default GetService;
