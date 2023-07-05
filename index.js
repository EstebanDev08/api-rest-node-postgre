import express from "express";
import { routerApi } from "./routes/index.js";

const app = express();

const PORT = 3000;

//permite resivir json en las peticiones
app.use(express.json());

app.get("/", (req, res) => {
  res.send("no hay nada xd");
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
