import express from 'express';
// import ApiRoutes from './routes/routes.js';
import middlewares from '@config/middleware';

const app = express();
middlewares(app);
// app.use('/api', ApiRoutes);

export default app;