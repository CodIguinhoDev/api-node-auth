import { entry, registration } from "../services/auth.js";
import User from "../models/modelUser.js";

export const register = async (req, res) => {
  try {
    const user = await registration(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await entry(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const message = async (_, res) => {
  try {
    return res.status(202).json({ message: "Login efetuado!" });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
