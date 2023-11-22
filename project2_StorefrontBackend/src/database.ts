import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const { ENV, PS_HOST, PS_DB, PS_TEST_DB, PS_USER, PS_PASSWORD } = process.env;

let client: Pool = new Pool();
const env = ENV?.trim();

if (env === 'test') {
  client = new Pool({
    host: PS_HOST,
    database: PS_TEST_DB,
    user: PS_USER,
    password: PS_PASSWORD,
  });
} else if (env === 'dev') {
  client = new Pool({
    host: PS_HOST,
    database: PS_DB,
    user: PS_USER,
    password: PS_PASSWORD,
  });
}

export default client;
