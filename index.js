import express from "express";
import { routerApi } from "./routes/index.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("");
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
