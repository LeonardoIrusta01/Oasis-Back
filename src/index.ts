import 'dotenv/config'
import expres from "express";
import morgan from "morgan";
import cors from "cors";
import { connection } from "./Persistence/db";

const app = expres();
const port = 3000;

app.use(cors())
app.use(morgan("dev"))

app.get("*", (req, res) => {
  res.send("Holuuuu");
});

connection()

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});


