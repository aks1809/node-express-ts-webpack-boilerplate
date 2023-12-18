import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "dotenv";
import { Pool } from "pg";

import logger from "@config/logger";

config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
});

const db = drizzle(pool);

const main = async () => {
    console.log("Migration started");
    logger.info("Migration started");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Migration ended");
    logger.info("Migration ended");
    process.exit(0);
}

main().catch((err) => {
    console.log("Migration error -", err);
    process.exit(0);
})