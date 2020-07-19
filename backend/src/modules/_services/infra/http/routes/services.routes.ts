import { Router } from 'express';

import CreateService from '@modules/_services/services/CreateService';

import ServicesRepository from '@modules/_services/infra/typeorm/repositories/ServicesRepository';

const servicesRouter = Router();

// create
servicesRouter.post('/', async (request, response) => {
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
});

// read
servicesRouter.get('/:id', async (request, response) => {
  const servicesRepository = new ServicesRepository();

  const { id } = request.params;

  const Service = await servicesRepository.findById(id);

  return response.json(Service);
});

// index
servicesRouter.get('/', async (request, response) => {
  const servicesRepository = new ServicesRepository();

  const services = await servicesRepository.index();

  return response.status(200).json(services);
});

export default servicesRouter;
