import { categoriesRoutes } from "./categories.js";
import { productsRouter } from "./products.js";
import { usersRoutes } from "./users.js";
import express from "express";

const versionApi = "/api/v1";

const routerApi = (app) => {
  const router = express.Router();
  app.use(versionApi, router);
  router.use(`/products`, productsRouter);
  router.use(`/users`, usersRoutes);
  router.use(`/categories`, categoriesRoutes);
};

export { routerApi };
