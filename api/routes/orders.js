import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import {
  createOrderSchema,
  getOrderSchema,
  updateOrderSchema,
} from "../schemas/order.schema.js";
import { OrderController } from "../controller/order.controller.js";

const ordersRouter = express.Router();

//traemos la clase de nuestro producto

ordersRouter.get("/", OrderController.getAllOrders);

//para recibir parametros por link se utiliza los dos puntos /:id
ordersRouter.get(
  "/:id",
  validatorHandler(getOrderSchema, "params"),
  OrderController.getOrder
);

ordersRouter.post(
  "/",
  validatorHandler(createOrderSchema, "body"),
  OrderController.createOrder
);

//actualizar data
ordersRouter.patch(
  "/:id",
  validatorHandler(getOrderSchema, "params"),
  validatorHandler(updateOrderSchema, "body"),
  OrderController.editOrder
);

//eliminar data
ordersRouter.delete(
  "/:id",
  validatorHandler(getOrderSchema, "params"),
  OrderController.deleteOrder
);

export { ordersRouter };
