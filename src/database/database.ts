import { drizzle } from "drizzle-orm/node-postgres";
import secret from '@config/secrets';
import { Pool } from "pg";

const pool = new Pool({
  host: secret.DB_HOST,
  port: secret.DB_PORT,
  user: secret.DB_USER,
  password: secret.DB_PASSWORD,
  database: secret.DB_DATABASE_NAME,
});
 
const db = drizzle(pool);

export default db;