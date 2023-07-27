import express from "express";
import cors from "cors";
import { routerApi } from "./routes/index.js";
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
  ormErrorHandler,
} from "./middleware/handleErrorValidator.js";
import { checkApiKey } from "./middleware/auth.middleware.js";
import passport from "./utils/auth/index.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// inicializamos passport
app.use(passport.initialize());

//permite resivir json en las peticiones
app.use(express.json());

app.get("/api", checkApiKey, (req, res) => {
  res.send("desplegado");
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port} `);
});
