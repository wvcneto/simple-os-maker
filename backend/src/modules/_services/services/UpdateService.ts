import { getRepository } from 'typeorm';

import Service from '@modules/_services/infra/typeorm/entities/Service';
import AppError from '@shared/errors/AppError';

class UpdateService {
  public async execute(service_id: string): Promise<Service> {
    const servicesRepository = getRepository(Service);

    const service = await servicesRepository.findOne(service_id);

    if (!service) {
      throw new AppError('Service does not exist.');
    }

    await servicesRepository.save(service);

    return service;
  }
}

export default UpdateService;
