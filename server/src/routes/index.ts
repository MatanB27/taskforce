import { Router } from "express";
import { authRoute } from "./auth";

export const apiRouter = Router();

apiRouter.use("/register", authRoute);
