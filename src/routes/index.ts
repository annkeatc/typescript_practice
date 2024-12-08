import express from 'express';
import UserRoute from './User/User';

export const routes = express.Router();

routes.use(UserRoute);