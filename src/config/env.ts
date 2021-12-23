import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  databases: {
    postgres: {
      type: process.env.POSTGRES_CONNECTION,
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DATABASE,
    },
  },
  secret_key: process.env.SECRET_KEY,
};