import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const body = req.body;

  res.json({ message: "xd" });
};
