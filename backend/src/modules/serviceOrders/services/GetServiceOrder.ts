import { getRepository } from 'typeorm';

import ServiceOrder from '@modules/serviceOrders/infra/typeorm/entities/ServiceOrder';
import AppError from '@shared/errors/AppError';

class GetServiceOrder {
  public async execute(id: string): Promise<ServiceOrder> {
    const serviceOrdersRepository = getRepository(ServiceOrder);

    const serviceOrder = await serviceOrdersRepository.findOne(id);

    if (!serviceOrder) {
      throw new AppError('ServiceOrder does not exist.');
    }

    return serviceOrder;
  }
}

export default GetServiceOrder;
