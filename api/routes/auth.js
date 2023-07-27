import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import { createUserSchema } from "../schemas/user.schema.js";
import passport from "passport";
import { AuthtController } from "../controller/auth.controller.js";

const authRouter = express.Router();

//para los favoritos

authRouter.post(
  "/login",
  validatorHandler(createUserSchema, "body"),
  passport.authenticate("local", { session: false }),
  AuthtController.autenticate
);

export { authRouter };
