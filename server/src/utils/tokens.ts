import jwt, { SignOptions } from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: string, res: Response) => {
  const payload = { id: userId };

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign(payload, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || "",
  } as SignOptions);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 100 * 60 * 60 * 24 * 7,
  });

  return token;
};

export { generateToken };
