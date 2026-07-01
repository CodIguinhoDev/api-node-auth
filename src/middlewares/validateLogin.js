import { readToken } from "../services/tokens.js";

export const middlewareToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ message: "Token não fornecido" });
  }

  try {
    const user = await readToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};
