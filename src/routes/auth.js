import { Router } from "express";
import { login, message, register } from "../controllers/user.js";
import { middlewareToken } from "../middlewares/validateLogin.js";
import { loginLimiter, registerLimiter } from "../middlewares/limit.js";

const route = Router();

/**
 * @openapi
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               password:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: Invalid request or user already exists.
 */
route.post("/register", registerLimiter, register);

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Authenticate a user
 *     description: Authenticates a user and returns a JWT token.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               password:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Login successful.
 *       401:
 *         description: Invalid credentials.
 */
route.post("/login", loginLimiter, login);

/**
 * @openapi
 * /message:
 *   get:
 *     summary: Protected route
 *     description: Returns a welcome message for authenticated users.
 *     tags:
 *       - Protected
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome message returned successfully.
 *       401:
 *         description: Unauthorized.
 */
route.get("/message", middlewareToken, message);

export default route;
