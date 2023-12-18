import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { environment } from "@config/environment"; 

const pool = new Pool({
  host: environment.DATABASE_HOST,
  port: parseInt(environment.DATABASE_PORT, 10),
  user: environment.DATABASE_USER,
  password: environment.DATABASE_PASSWORD,
  database: environment.DATABASE_NAME,
});

const db = drizzle(pool);