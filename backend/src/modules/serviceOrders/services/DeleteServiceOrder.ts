import { getRepository } from 'typeorm';

import ServiceOrder from '@modules/serviceOrders/infra/typeorm/entities/ServiceOrder';
import AppError from '@shared/errors/AppError';

class DeleteServiceOrder {
  public async execute(id: string): Promise<void> {
    const serviceOrderRepository = getRepository(ServiceOrder);

    const serviceOrder = await serviceOrderRepository.findOne(id);

    if (!serviceOrder) {
      throw new AppError('ServiceOrder does not exist');
    }

    await serviceOrderRepository.remove(serviceOrder);
  }
}

export default DeleteServiceOrder;
