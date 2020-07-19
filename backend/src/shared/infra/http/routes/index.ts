import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import servicesRouter from '@modules/_services/infra/http/routes/services.routes';
import serviceOrdersRouter from '@modules/serviceOrders/infra/http/routes/serviceOrders.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/services', servicesRouter);
routes.use('/service-orders', serviceOrdersRouter);

export default routes;
