import Service from '@modules/_services/infra/typeorm/entities/Service';
import AppError from '@shared/errors/AppError';
import IServicesRepository from '../repositories/IServicesRepository';

interface IRequest {
  type: string;
  name: string;
  description: string;
  code: string;
}

class CreateService {
  constructor(private ServicesRepository: IServicesRepository) {}

  public async execute({
    type,
    name,
    description,
    code,
  }: IRequest): Promise<Service> {
    try {
      const service = await this.ServicesRepository.create({
        type,
        name,
        description,
        code,
      });

      return service;
    } catch {
      throw new AppError('Service does not created.');
    }
  }
}

export default CreateService;
