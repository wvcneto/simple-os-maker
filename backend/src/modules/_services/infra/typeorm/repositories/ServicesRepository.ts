import { getRepository, Repository } from 'typeorm';

import IServiceRepository from '@modules/_services/repositories/IServicesRepository';
import ICreateServiceDTO from '@modules/_services/dtos/ICreateServiceDTO';

import Service from '../entities/Service';

class ServicesRepository implements IServiceRepository {
  private ormRepository: Repository<Service>;

  constructor() {
    this.ormRepository = getRepository(Service);
  }

  public async findById(id: string): Promise<Service | undefined> {
    const service = await this.ormRepository.findOne(id);

    return service;
  }

  public async index(): Promise<Service[] | undefined> {
    const services = await this.ormRepository.find();

    return services;
  }

  public async create(serviceData: ICreateServiceDTO): Promise<Service> {
    const service = this.ormRepository.create(serviceData);

    await this.ormRepository.save(service);

    return service;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(service: Service): Promise<Service> {
    return this.ormRepository.save(service);
  }
}

export default ServicesRepository;
