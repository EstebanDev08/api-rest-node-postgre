import { categoriesRoutes } from "./categories.js";
import { customerRouter } from "./customer.js";
import { productsRouter } from "./products.js";
import { usersRouter } from "./users.js";
import express from "express";

const versionApi = "/api/v1";

const routerApi = (app) => {
  const router = express.Router();
  app.use(versionApi, router);

  router.use(`/products`, productsRouter);
  router.use(`/users`, usersRouter);
  router.use(`/categories`, categoriesRoutes);
  router.use(`/customers`, customerRouter);
};

export { routerApi };
