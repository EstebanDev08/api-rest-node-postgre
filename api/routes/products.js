import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import {
  createProductSchema,
  getPaginationSchema,
  getProductSchema,
  updateProductSchema,
} from "../schemas/product.schema.js";
import { ProductController } from "../controller/product.controller.js";

const productsRouter = express.Router();

//traemos la clase de nuestro producto

productsRouter.get(
  "/",
  validatorHandler(getPaginationSchema, "query"),
  ProductController.getAllProducts
);

//para recibir parametros por link se utiliza los dos puntos /:id
productsRouter.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  ProductController.getProduct
);

productsRouter.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  ProductController.createProduct
);

//actualizar data
productsRouter.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  ProductController.editProduct
);

//eliminar data
productsRouter.delete(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  ProductController.deleteProduct
);

export { productsRouter };
