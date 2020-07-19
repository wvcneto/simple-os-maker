import ServiceOrder from '../infra/typeorm/entities/ServiceOrder';
import ICreateServiceOrdersDTO from '../dtos/ICreateServiceOrdersDTO';

export default interface ServiceOrdersRepository {
  // findOne onde -> id
  findById(id: string): Promise<ServiceOrder | undefined>;

  // findAll
  index(): Promise<ServiceOrder[] | undefined>;

  // create
  create(date: ICreateServiceOrdersDTO): Promise<ServiceOrder>;

  // save
  save(serviceOrder: ServiceOrder): Promise<ServiceOrder>;
}
