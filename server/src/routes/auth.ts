import { Router } from "express";
import { login, logout, register } from "../controllers/auth";


export const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post('/logout', logout)