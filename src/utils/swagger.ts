export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Oasis API",
      version: "1.0.0",
      decription: "A simple express library API",
    },
    schemes: ["http", "https"],
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./src/Routes/*.ts", "./dist/Routes/*.js"],
};
