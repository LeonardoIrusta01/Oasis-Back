/* Import Configurations */
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connection } from "./Persistence/db";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./utils/swagger";

/* Import Configurations */
import Index from "./Routes/index";

/* Initializations */
const app = express();
const port = 3001;

app.use(cors());
app.use(morgan("dev"));

const swaggerSpec = swaggerJsDoc(options);

/* Middlewares */
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

/* Routes */
app.use("/api", Index);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* DB connection */
connection();

/* Start server */
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
