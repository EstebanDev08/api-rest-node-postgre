import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import { FavoriteController } from "../controller/favorite.controller.js";
import {
  createFavoriteSchema,
  getFavoriteSchema,
} from "../schemas/favorite.schema.js";

const favoriteRouter = express.Router();

//para los favoritos

favoriteRouter.get(
  "/:id",
  validatorHandler(getFavoriteSchema, "params"),
  FavoriteController.getFavorite
);
favoriteRouter.post(
  "/add",
  validatorHandler(createFavoriteSchema, "body"),
  FavoriteController.createFavorite
);

favoriteRouter.delete(
  "/remove",
  validatorHandler(createFavoriteSchema, "body"),
  FavoriteController.removeFavorite
);

export { favoriteRouter };
