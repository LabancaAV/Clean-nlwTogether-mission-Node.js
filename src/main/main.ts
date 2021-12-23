import express from 'express';
import * as dotenv from 'dotenv';
import env from '../config/env';
import server from './routes/server';
import { PostgresDatabase } from '../infra/database/postgres/connection';
import { Database } from '../infra/contracts/database';

dotenv.config();
const app = express();
const database = new PostgresDatabase();
startApp(database);

function startApp(database: Database) {
  database
    .connect()
    .then(() => {
      app.use(server);
      app.listen(env.port, () => {
        console.log(`⚡️[${new Date()}]: Server is running at http://localhost:${env.port}`);
      });
    })
    .catch((error) => {
      console.log(`Database connection problem: ${error}`);
    });
}