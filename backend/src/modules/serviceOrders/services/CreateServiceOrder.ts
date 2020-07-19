import ServiceOrder from '@modules/serviceOrders/infra/typeorm/entities/ServiceOrder';
import AppError from '@shared/errors/AppError';
import IServiceOrdersRepository from '../repositories/IServiceOrdersRepository';

interface IRequest {
  description: string;
  service_id: string;
  client_id: string;
  responsible_id: string;
  requester_id: string;
  deadline: Date;
}

class CreateServiceOrder {
  constructor(private ServiceOrdersRepository: IServiceOrdersRepository) {}

  public async execute({
    description,
    service_id,
    client_id,
    responsible_id,
    requester_id,
    deadline,
  }: IRequest): Promise<ServiceOrder> {
    try {
      const serviceOrder = await this.ServiceOrdersRepository.create({
        description,
        service_id,
        client_id,
        responsible_id,
        requester_id,
        deadline,
      });

      return serviceOrder;
    } catch {
      throw new AppError('ServiceOrder does not created');
    }
  }
}

export default CreateServiceOrder;
