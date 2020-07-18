import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateServiceOrder from '../services/CreateServiceOrder';
import ServiceOrder from '../models/ServiceOrder';

const serviceOrdersRouter = Router();

// post
serviceOrdersRouter.post('/', async (request, response) => {
  const {
    description,
    service_id,
    client_id,
    responsible_id,
    requester_id,
    deadline,
  } = request.body;

  const createServiceOrder = new CreateServiceOrder();

  const serviceOrder = createServiceOrder.execute({
    description,
    service_id,
    client_id,
    responsible_id,
    requester_id,
    deadline,
  });

  return response.status(201).json(serviceOrder);
});

// list
serviceOrdersRouter.get('/', async (request, response) => {
  const serviceOrdersRepository = getRepository(ServiceOrder);

  const serviceOrders = await serviceOrdersRepository.find();

  return response.status(200).json(serviceOrders);
});

export default serviceOrdersRouter;
