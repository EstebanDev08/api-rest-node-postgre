import { categoriesRoutes } from "./categories.js";
import { productsRouter } from "./products.js";
import { usersRoutes } from "./users.js";

const routerApi = (app) => {
  app.use("/products", productsRouter);
  app.use("/users", usersRoutes);
  app.use("/categories", categoriesRoutes);
};

export { routerApi };
