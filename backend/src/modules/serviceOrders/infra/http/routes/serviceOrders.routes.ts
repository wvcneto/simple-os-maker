import { Router } from 'express';
import CreateServiceOrder from '@modules/serviceOrders/services/CreateServiceOrder';
import ServiceOrdersRepository from '@modules/serviceOrders/infra/typeorm/repositories/ServiceOrdersRepository';

const serviceOrdersRouter = Router();

// post
serviceOrdersRouter.post('/', async (request, response) => {
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
});

// list
serviceOrdersRouter.get('/', async (request, response) => {
  const serviceOrdersRepository = new ServiceOrdersRepository();

  const serviceOrders = await serviceOrdersRepository.index();

  return response.status(200).json(serviceOrders);
});

export default serviceOrdersRouter;
