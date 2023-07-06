import express from "express";
import cors from "cors";
import { routerApi } from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 3000;

//permite resivir json en las peticiones
app.use(express.json());

routerApi(app);

app.use(cors());

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
