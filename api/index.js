import express from "express";
import cors from "cors";
import { routerApi } from "./routes/index.js";
import { handleErrorSql } from "./middleware/handleErrorValidator.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
//permite resivir json en las peticiones
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("desplegado");
});

routerApi(app);
app.use(handleErrorSql);
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
