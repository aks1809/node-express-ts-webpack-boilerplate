import dotenv from 'dotenv';

dotenv.config();

export const environment : { [key: string]: string} = {
    PORT: process.env.PORT!,

    DATABASE_HOST: process.env.DATABASE_HOST!,
    DATABASE_PORT: process.env.DATABASE_PORT!,
    DATABASE_USER: process.env.DATABASE_USER!,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD!,
    DATABASE_NAME: process.env.DATABASE_NAME!,

    ALLOWED_DOMAIN: process.env.ALLOWED_DOMAIN!,
};