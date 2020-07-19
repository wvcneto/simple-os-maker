import { getRepository } from 'typeorm';

import Service from '@modules/_services/infra/typeorm/entities/Service';
import AppError from '@shared/errors/AppError';

class DeleteService {
  public async execute(id: string): Promise<void> {
    const serviceRepository = getRepository(Service);

    const service = await serviceRepository.findOne(id);

    if (!service) {
      throw new AppError('Service does not exist');
    }

    await serviceRepository.remove(service);
  }
}

export default DeleteService;
