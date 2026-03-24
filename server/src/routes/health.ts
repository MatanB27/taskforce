import { Router } from "express";
import { env } from "../config/env";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "taskforce-server",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});
