import { categoryRouter } from "./category.js";
import { customerRouter } from "./customer.js";
import { favoriteRouter } from "./favorite.js";
import { ordersRouter } from "./orders.js";
import { productsRouter } from "./products.js";
import { usersRouter } from "./users.js";
import express from "express";

const versionApi = "/api/v1";

const routerApi = (app) => {
  const router = express.Router();
  app.use(versionApi, router);

  router.use(`/products`, productsRouter);
  router.use(`/users`, usersRouter);
  router.use(`/category`, categoryRouter);
  router.use(`/customers`, customerRouter);
  router.use(`/orders`, ordersRouter);
  router.use(`/favorites`, favoriteRouter);
};

export { routerApi };
