import bcrypt from "bcrypt";

const PASSWORD_SALT_ROUNDS = 10;

const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(PASSWORD_SALT_ROUNDS);
  return bcrypt.hash(password, salt);
};

const validatePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export { hashPassword, validatePassword };
