import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import { CartController } from "../controller/cart.controller.js";
import {
  addProductToCartSchema,
  getCartSchema,
  incrementProductCartSchema,
} from "../schemas/cart.schema.js";

const cartRouter = express.Router();

//para los favoritos

cartRouter.get(
  "/:id",
  validatorHandler(getCartSchema, "params"),
  CartController.getCart
);

cartRouter.post(
  "/add-product",
  validatorHandler(addProductToCartSchema, "body"),
  CartController.addProduct
);

cartRouter.patch(
  "/increment-product",
  validatorHandler(incrementProductCartSchema, "body"),
  CartController.incrementProduct
);

cartRouter.patch(
  "/decrement-product",
  validatorHandler(incrementProductCartSchema, "body"),
  CartController.decrementProduct
);

cartRouter.delete(
  "/delete-product",
  validatorHandler(addProductToCartSchema, "body"),
  CartController.deleteProductToCart
);

cartRouter.delete(
  "/delete-all-products/:id",
  validatorHandler(getCartSchema, "params"),
  CartController.deleteAllProductsToCart
);

export { cartRouter };
