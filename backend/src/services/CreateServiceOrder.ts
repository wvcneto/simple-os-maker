import { getRepository } from 'typeorm';

import ServiceOrder from '../models/ServiceOrder';
import AppError from '../errors/AppError';

interface Request {
  description: string;
  service_id: string;
  client_id: string;
  responsible_id: string;
  requester_id: string;
  deadline: Date;
}

class CreateServiceOrder {
  public async execute({
    description,
    service_id,
    client_id,
    responsible_id,
    requester_id,
    deadline,
  }: Request): Promise<ServiceOrder> {
    try {
      const serviceOrdersRespository = getRepository(ServiceOrder);

      const serviceOrder = serviceOrdersRespository.create({
        description,
        service_id,
        client_id,
        responsible_id,
        requester_id,
        deadline,
      });

      await serviceOrdersRespository.save(serviceOrder);

      return serviceOrder;
    } catch {
      throw new AppError('ServiceOrder does not created');
    }
  }
}

export default CreateServiceOrder;
