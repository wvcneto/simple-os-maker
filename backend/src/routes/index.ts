import { Router } from 'express';

import usersRouter from './users.routes';
import serviceOrdersRouter from './serviceOrders.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/service-orders', serviceOrdersRouter);

export default routes;
