import logger from '@config/logger';
import secrets from "@config/secrets";
import httpServer from "./server";
import db from "@database/database";
import * as schema from "@database/schema";

httpServer.listen(secrets.PORT, async () => {
    try {
      const res = await db.select().from(schema.usersSchema);
      console.log(res);
      console.log(`API server listening on port: ${secrets.PORT}`);
      logger.info(`API server listening on port: ${secrets.PORT}`);
    } catch (err) {
      console.error("Cannot run server! ", err);
      logger.error("Cannot run server! ", err);
      process.exit(0);
    }
  });

process.on("SIGINT", () => {
    process.exit(0);
  });