import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} from "../schemas/category.schema.js";
import { CategoryController } from "../controller/category.controller.js";
import passport from "passport";
import { checkAdminRole } from "../middleware/auth.middleware.js";

const categoryRouter = express.Router();

//traemos la clase de nuestro producto

categoryRouter.get("/", CategoryController.getAllCategorys);

//para recibir parametros por link se utiliza los dos puntos /:id
categoryRouter.get(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  CategoryController.getCategory
);

categoryRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole("admin"),
  validatorHandler(createCategorySchema, "body"),
  CategoryController.createCategory
);

//actualizar data
categoryRouter.patch(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  validatorHandler(updateCategorySchema, "body"),
  CategoryController.editCategory
);

//eliminar data
categoryRouter.delete(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  CategoryController.deleteCategory
);

export { categoryRouter };
