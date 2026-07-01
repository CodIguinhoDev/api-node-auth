import User from "../models/modelUser.js";

export const findByEmail = async (email) => {
  return User.findOne({ email });
};

export const createUser = async (data) => {
  return await User.create(data);
};
