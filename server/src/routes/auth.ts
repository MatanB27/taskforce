import { Router } from "express";
import { register } from "../controllers/auth";

// TODO: might change file name to register or keep auth. need to look for that
export const authRoute = Router();

authRoute.post("/register", register);
