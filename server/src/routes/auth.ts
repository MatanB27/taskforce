import { Router } from "express";
import { register } from "../controllers/auth";

export const authRoute = Router();

authRoute.post("/register", register);
