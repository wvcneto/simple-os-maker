import { Router } from 'express';

import ServiceOrdersController from '../controllers/ServiceOrdersController';

const serviceOrdersRouter = Router();
const serviceOrdersController = new ServiceOrdersController();

// create
serviceOrdersRouter.post('/', serviceOrdersController.create);

// read
serviceOrdersRouter.get('/:id', serviceOrdersController.view);

// index
serviceOrdersRouter.get('/', serviceOrdersController.index);

export default serviceOrdersRouter;
