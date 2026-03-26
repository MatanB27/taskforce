import { Request, Response } from "express";
import { prisma } from "../config/db";
import { hashPassword } from "../utils";

export const register = async (req: Request, res: Response) => {
  const {fullName, email, password} = req.body;

  const userExists = await prisma.user.findUnique({
    where: {email}
  })

  if(userExists) {
    return res.status(400).json({error: "User already exists with this email"})
  }

  const hashedPassword = await hashPassword(password)
  const user = await prisma.user.create({data: {fullName, email, password: hashedPassword}})

  // TODO: Check if its works
  res.status(201).json({
    status: 'success',
    data: {
      user: {
        id: user.id,
        fullName: user.fullName,
        email,
      }
    }
  })
};
