/* Import Configurations */
import "dotenv/config";
import expres from "express";
import morgan from "morgan";
import cors from "cors";
import { connection } from "./Persistence/db";


/* Import Configurations */
import Index from "./Routes/index";

/* Initializations */
const app = expres();
const port = 3001;

app.use(cors());
app.use(morgan("dev"));

/* Middlewares */
app.use(expres.json({ limit: "50mb" }));
app.use(expres.urlencoded({ extended: true }));
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

/* DB connection */
connection();

/* Start server */
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
