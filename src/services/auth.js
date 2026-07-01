import bcrypt from "bcryptjs";
import { generateToken } from "./tokens.js";
import { createUser, findByEmail } from "../repositories/user.js";

export const registration = async (userData) => {
  const { email, password } = userData;

  const userCheck = await findByEmail(email);

  if (userCheck) {
    throw new Error("Usuário ja existe");
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    return await createUser({
      email,
      password: hashPassword,
    });
  } catch (error) {
    throw new Error("Erro ao se cadastrar");
  }
};

export const entry = async (userData) => {
  const { email, password } = userData;

  const user = await findByEmail(email);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Algo deu errado!");
    }

    const token = await generateToken(user);

    return token;
  } catch (error) {
    throw new Error("Usuário ou senha inválidos");
  }
};
