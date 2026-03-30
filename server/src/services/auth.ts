import type { User } from "@prisma/client";
import { prisma } from "../config/db";

const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

const createUser = async (
  fullName: string,
  email: string,
  password: string,
): Promise<User> => {
  return prisma.user.create({
    data: { fullName, email, password },
  });
};

export { createUser, findUserByEmail };
