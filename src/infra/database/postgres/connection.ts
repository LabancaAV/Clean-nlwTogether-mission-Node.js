import { Database } from '../../contracts/database';
import env from '../../../config/env';
import { createConnection } from 'typeorm';
import * as path from 'path';

export class PostgresDatabase implements Database {
  async connect() {
    const database = await createConnection({
      type: 'postgres',
      host: env.databases.postgres.host,
      database: env.databases.postgres.database,
      username: env.databases.postgres.user,
      password: env.databases.postgres.password,
      port: +env.databases.postgres.port,
      entities: [path.resolve(__dirname, './entities/*-entity.ts')],
    });
    return database;
  }
}