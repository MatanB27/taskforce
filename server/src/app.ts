import cors from "cors";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import rateLimit from "express-rate-limit";

import { env } from "./config/env";
import { logger } from "./lib/logger";
import { apiRouter } from "./routes";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.CLIENT_URL,
      credentials: true,
    }),
  );
  app.use(helmet());
  // TODO: After having users, limit it to per user, not per IP
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 200,
      standardHeaders: true,
      legacyHeaders: false,
    }),
  );
  app.use(
    pinoHttp({
      logger,
    }),
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (_req, res) => {
    res.status(200).json({
      message: "Taskforce API is running.",
    });
  });

  app.use("/api", apiRouter);

  return app;
}
