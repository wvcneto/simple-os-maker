import Service from '../infra/typeorm/entities/Service';
import ICreateServiceDTO from '../dtos/ICreateServiceDTO';

export default interface ServicesRepository {
  // findOne onde -> id
  findById(id: string): Promise<Service | undefined>;

  // findAll
  index(): Promise<Service[] | undefined>;

  // create
  create(date: ICreateServiceDTO): Promise<Service>;

  // save
  save(service: Service): Promise<Service>;
}
