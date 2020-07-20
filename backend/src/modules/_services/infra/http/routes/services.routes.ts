import { Router } from 'express';

import ServicesController from '../controllers/ServicesController';

const servicesRouter = Router();
const servicesController = new ServicesController();

// create
servicesRouter.post('/', servicesController.create);

// read
servicesRouter.get('/:id', servicesController.view);

// read
servicesRouter.delete('/:id', servicesController.delete);

// index
servicesRouter.get('/', servicesController.index);

export default servicesRouter;
