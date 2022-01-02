import express, { json, Request, Response } from 'express';
import { verifyJwt } from '../../shared/helpers/verify-jwt-helper';
import { adaptRoute } from '../adapters/router';
import { authenticateUserController } from '../factories/authenticate-user-controller';
import { createTagController } from '../factories/create-tag-controller';
import { createUserController } from '../factories/create-user-controller';
import { listUsersController } from '../factories/list-users-controller';

const server = express.Router();
server.use(json());

server.get('/authenticate', async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(authenticateUserController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

server.post('/user/create', async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(createUserController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

server.get('/user/list', verifyJwt, async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(listUsersController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

server.post('/tag/create', verifyJwt, async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(createTagController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

export default server;