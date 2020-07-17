import { Router } from 'express';

const serviceOrdersRouter = Router();

// post
serviceOrdersRouter.post('/', (request, response) => {
  return response.json({ ok: true });
});

// getOne
serviceOrdersRouter.get('/', (request, response) => {
  return response.json({ ok: true });
});

// getAll
serviceOrdersRouter.get('/', (request, response) => {
  return response.json({ ok: true });
});

// delete
serviceOrdersRouter.delete('/', (request, response) => {
  return response.json({ ok: true });
});

// put
serviceOrdersRouter.put('/', (request, response) => {
  return response.json({ ok: true });
});

export default serviceOrdersRouter;
