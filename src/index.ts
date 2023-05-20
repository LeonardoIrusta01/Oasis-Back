import expres from "express";
import morgan from "morgan";
import cors from "cors";

const app = expres();
const port = 3000;

app.use(cors())
app.use(morgan("dev"))

app.get("*", (req, res) => {
  res.send("Holuuuu");
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});