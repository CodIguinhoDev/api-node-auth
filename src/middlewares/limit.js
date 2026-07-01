import rateLimit from "express-rate-limit";

export const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 7,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Muitas tentativas de cadastro. Tente novamente mais tarde.",
  },
});

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Muitas requisições foram feitas. Tente mais tarde",
  },
});
