import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} from "../schemas/customer.schema.js";
import { CustomerController } from "../controller/customer.controller.js";
import { FavoriteController } from "../controller/favorite.controller.js";
import {
  createFavoriteSchema,
  getFavoriteSchema,
} from "../schemas/favorite.schema.js";

const customerRouter = express.Router();

//traemos la clase de nuestro producto

customerRouter.get("/", CustomerController.getAllCustomers);

//para recibir parametros por link se utiliza los dos puntos /:id
customerRouter.get(
  "/:id",
  validatorHandler(getCustomerSchema, "params"),
  CustomerController.getCustomer
);

customerRouter.post(
  "/",
  validatorHandler(createCustomerSchema, "body"),
  CustomerController.createCustomer
);

//actualizar data
customerRouter.patch(
  "/:id",
  validatorHandler(getCustomerSchema, "params"),
  validatorHandler(updateCustomerSchema, "body"),
  CustomerController.editCustomer
);

//eliminar data
customerRouter.delete(
  "/:id",
  validatorHandler(getCustomerSchema, "params"),
  CustomerController.deleteCustomer
);

export { customerRouter };
