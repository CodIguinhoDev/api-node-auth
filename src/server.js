import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import route from "./routes/auth.js";
import { connection_db } from "./database/connection.js";

const server = express();
const connect = connection_db();

server.use(express.json());
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
server.use(route);

server.listen(process.env.PORT, () => {
  console.log("Server started");
});
