import swaggerJSDoc from "swagger-jsdoc";
import "dotenv/config";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API autenticação de usuário",
      version: "1.0.0",
      description: "Autenticação construída com Node, Express e MongoDB",
    },
    servers: [
      {
        url: process.env.PORT,
      },
    ],
  },
  apis: ["./src/routes/auth.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
