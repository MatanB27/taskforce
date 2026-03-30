import { Request, Response } from "express";
import { createUser, findUserByEmail } from "../services/auth";
import { hashPassword, validatePassword } from "../utils/password";
import { generateToken } from "../utils/tokens";

const register = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const { fullName, email, password } = req.body;

  const userExists = await findUserByEmail(email);

  if (userExists) {
    return res
      .status(400)
      .json({ error: "User already exists with this email" });
  }

  const hashedPassword = await hashPassword(password);
  const user = await createUser(fullName, email, hashedPassword);

  const token = generateToken(user.id, res);

  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: user.id,
        fullName,
        email,
      },
      token,
    },
  });
};

const login = async (req: Request, res: Response): Promise<Response | void> => {
  const { email, password } = req.body;

  const userExists = await findUserByEmail(email);

  if (!userExists) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isPasswordValid = await validatePassword(password, userExists.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = generateToken(userExists.id, res);

  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: userExists.id,
        email,
      },
      token,
    },
  });
};

const logout = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    status: "success",
    message: "Logged out successfully.",
  });
};

export { register, login, logout };
