import {Router, Request, Response } from "express";
import { addUser, getUserById, getUsers } from "../../handlers/User/User";

const UserRoute = Router();

UserRoute.get("/", getUsers as (request: Request, response: Response) => void);
UserRoute.get(
  "/:id",
  getUserById as (request: Request, response: Response) => void
);
UserRoute.post("/", addUser as (request: Request, response: Response) => void);

export default UserRoute;
