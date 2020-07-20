import { Request, Response } from 'express';

import CreateServiceOrder from '@modules/serviceOrders/services/CreateServiceOrder';
import ServiceOrdersRepository from '@modules/serviceOrders/infra/typeorm/repositories/ServiceOrdersRepository';

export default class ServiceOrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const serviceOrdersRepository = new ServiceOrdersRepository();

    const {
      description,
      service_id,
      client_id,
      responsible_id,
      requester_id,
      deadline,
    } = request.body;

    const createServiceOrder = new CreateServiceOrder(serviceOrdersRepository);

    const serviceOrder = await createServiceOrder.execute({
      description,
      service_id,
      client_id,
      responsible_id,
      requester_id,
      deadline,
    });

    return response.status(201).json(serviceOrder);
  }

  public async view(request: Request, response: Response): Promise<Response> {
    const serviceOrdersRepository = new ServiceOrdersRepository();

    const { id } = request.params;

    const serviceOrder = await serviceOrdersRepository.findById(id);

    return response.json(serviceOrder);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const serviceOrdersRepository = new ServiceOrdersRepository();

    const { id } = request.params;

    await serviceOrdersRepository.delete(id);

    return response.status(200).send();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const serviceOrdersRepository = new ServiceOrdersRepository();

    const serviceOrders = await serviceOrdersRepository.index();

    return response.status(200).json(serviceOrders);
  }
}
