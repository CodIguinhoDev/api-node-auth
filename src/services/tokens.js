import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (data) => {
  const payload = { data };

  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "30m",
  });

  return token;
};

export const readToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
      if (err) return reject(err);

      resolve(decoded);
    });
  });
};
