import { config } from "dotenv";

config();

const deploymentConstants = {
  PORT: process.env.PORT || 9000,

  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE_NAME: process.env.DB_DATABASE_NAME
};

export default deploymentConstants;
