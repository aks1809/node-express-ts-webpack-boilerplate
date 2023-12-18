import express from 'express';
import logger from '@config/logger';
import { environment } from '@config/environment';
import middleware from '@config/middleware';
import APIRoutes from '@routes/routes';

const app = express();

middleware(app);

app.use("/api", APIRoutes);

app.listen(environment.PORT, () => {
    logger.info(`Listening on port ${environment.PORT}`);
    console.log(`Listening on port ${environment.PORT}`);
});