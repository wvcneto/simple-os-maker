import { getRepository } from 'typeorm';

import ServiceOrder from '@modules/serviceOrders/infra/typeorm/entities/ServiceOrder';
import AppError from '@shared/errors/AppError';

class UpdateServiceOrder {
  public async execute(serviceOrder_id: string): Promise<ServiceOrder> {
    const serviceOrdersRepository = getRepository(ServiceOrder);

    const serviceOrder = await serviceOrdersRepository.findOne(serviceOrder_id);

    if (!serviceOrder) {
      throw new AppError('ServiceOrder does not exist.');
    }

    await serviceOrdersRepository.save(serviceOrder);

    return serviceOrder;
  }
}

export default UpdateServiceOrder;
