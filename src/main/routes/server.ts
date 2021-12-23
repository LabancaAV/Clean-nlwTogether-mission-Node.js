import express, { json, Request, Response } from 'express';
import { adaptRoute } from '../adapters/router';
import { createUserController } from '../factories/create-user-controller';
import { listUsersController } from '../factories/list-users-controller';

const server = express.Router();
server.use(json());

server.post('/user/create', async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(createUserController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

server.get('/user/list', async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(listUsersController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

export default server;