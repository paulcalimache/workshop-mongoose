import express from 'express';
import sensorsRouter from './sensors';

const routes = express.Router();
routes.use('/sensors', sensorsRouter);

export default routes;