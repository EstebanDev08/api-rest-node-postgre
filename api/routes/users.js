import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} from "../schemas/user.schema.js";
import { UserController } from "../controller/user.controller.js";

const usersRouter = express.Router();

//traemos la clase de nuestro Usero

usersRouter.get("/", UserController.getAllUsers);

//para recibir parametros por link se utiliza los dos puntos /:id
usersRouter.get(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  UserController.getUser
);

usersRouter.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  UserController.createUser
);

//actualizar data
usersRouter.patch(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  UserController.editUser
);

//eliminar data
usersRouter.delete(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  UserController.deleteUser
);

export { usersRouter };
