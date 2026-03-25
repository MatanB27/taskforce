import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { apiRouter } from "./routes";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db";

config();
connectDB();

const app = express();
app
  .use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    }),
  )
  .use(
    helmet({
      contentSecurityPolicy: false,
    }),
  )
  // TODO: After having users, limit it to per user, not per IP
  .use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 200,
      standardHeaders: true,
      legacyHeaders: false,
    }),
  )
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

  .get("/", (_req, res) => {
    res.status(200).json({
      message: "Taskforce API is running.",
    });
  })

  .use("/api", apiRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Taskforce server started on port ${process.env.PORT} (${process.env.NODE_ENV})`,
  );
});

// Handle unhandles promise rejections (e.g. dtabase connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});
