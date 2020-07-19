import { Request, Response } from 'express';

import CreateService from '@modules/_services/services/CreateService';
import ServicesRepository from '@modules/_services/infra/typeorm/repositories/ServicesRepository';

export default class ServicesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const servicesRepository = new ServicesRepository();

    const { type, name, description, code } = request.body;

    const createService = new CreateService(servicesRepository);

    const service = await createService.execute({
      type,
      name,
      description,
      code,
    });

    return response.status(201).json(service);
  }

  public async view(request: Request, response: Response): Promise<Response> {
    const servicesRepository = new ServicesRepository();

    const { id } = request.params;

    const Service = await servicesRepository.findById(id);

    return response.json(Service);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const servicesRepository = new ServicesRepository();

    const services = await servicesRepository.index();

    return response.status(200).json(services);
  }
}
