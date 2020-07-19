import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateService from '@modules/_services/services/CreateService';
import Service from '@modules/_services/infra/typeorm/entities/Service';

const servicesRouter = Router();

servicesRouter.post('/', async (request, response) => {
  const { type, name, description, code } = request.body;

  const createService = new CreateService();

  const service = await createService.execute({
    type,
    name,
    description,
    code,
  });

  return response.status(201).json(service);
});

servicesRouter.get('/', async (request, response) => {
  const servicesRepository = getRepository(Service);

  const services = await servicesRepository.find();

  return response.status(200).json(services);
});

export default servicesRouter;
