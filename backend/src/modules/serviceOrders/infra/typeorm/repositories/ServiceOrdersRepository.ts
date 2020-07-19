import { getRepository, Repository } from 'typeorm';

import IServiceOrderRepository from '@modules/serviceOrders/repositories/IServiceOrdersRepository';
import ICreateServiceOrdersDTO from '@modules/serviceOrders/dtos/ICreateServiceOrdersDTO';

import ServiceOrder from '../entities/ServiceOrder';

class ServiceOrdersRepository implements IServiceOrderRepository {
  private ormRepository: Repository<ServiceOrder>;

  constructor() {
    this.ormRepository = getRepository(ServiceOrder);
  }

  public async findById(id: string): Promise<ServiceOrder | undefined> {
    const serviceOrder = await this.ormRepository.findOne(id);

    return serviceOrder;
  }

  public async index(): Promise<ServiceOrder[] | undefined> {
    const serviceOrders = await this.ormRepository.find();

    return serviceOrders;
  }

  public async create(
    serviceOrderData: ICreateServiceOrdersDTO,
  ): Promise<ServiceOrder> {
    const serviceOrder = this.ormRepository.create(serviceOrderData);

    await this.ormRepository.save(serviceOrder);

    return serviceOrder;
  }

  public async save(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    return this.ormRepository.save(serviceOrder);
  }
}

export default ServiceOrdersRepository;
