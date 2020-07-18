import { Router } from 'express';

import usersRouter from './users.routes';
import serviceOrdersRouter from './serviceOrders.routes';
import servicesRouter from './services.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/services', servicesRouter);
routes.use('/service-orders', serviceOrdersRouter);

export default routes;
