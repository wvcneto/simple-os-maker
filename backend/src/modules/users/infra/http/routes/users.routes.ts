import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

// create
usersRouter.post('/', usersController.create);

// read
usersRouter.get('/:id', usersController.view);

// index
usersRouter.get('/', usersController.index);

export default usersRouter;
