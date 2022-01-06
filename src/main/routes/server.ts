import express, { json, Request, Response } from 'express';
import { verifyJwt } from '../../shared/helpers/verify-jwt-helper';
import { adaptRoute } from '../adapters/router';
import { authenticateUserController } from '../factories/authenticate-user-controller';
import { createTagController } from '../factories/create-tag-controller';
import { createUserController } from '../factories/create-user-controller';
import { listUsersController } from '../factories/list-users-controller';
import { listTagsController } from '../factories/list-tags-controller';
import { createComplimentController } from '../factories/create-compliment-controller';
import { listUserReceiveComplimentsController } from '../factories/list-user-receive-compliments';
import { listUserSendComplimentsController } from '../factories/list-user-send-compliments';

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

server.get('/tag/list', verifyJwt, async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(listTagsController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

server.post('/compliment/create', verifyJwt, async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(createComplimentController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

server.get('/compliment/list/user-receive', verifyJwt, async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(listUserReceiveComplimentsController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});

server.get('/compliment/list/user-send', verifyJwt, async (req: Request, res: Response) => {
  const httpResponse = await adaptRoute(listUserSendComplimentsController(), req);
  res.status(httpResponse.statusCode).json(httpResponse.data);
});


export default server;