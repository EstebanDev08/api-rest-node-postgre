import express from "express";
import { validatorHandler } from "../middleware/validator.middleware.js";
import passport from "passport";
import { AuthtController } from "../controller/auth.controller.js";
import { loginSchema, recoveryPassSchema } from "../schemas/auth.schema.js";

const authRouter = express.Router();

//para los favoritos

authRouter.post(
  "/login",
  validatorHandler(loginSchema, "body"),
  passport.authenticate("local", { session: false }),
  AuthtController.autenticate
);

authRouter.post(
  "/recovery",
  validatorHandler(recoveryPassSchema, "body"),
  AuthtController.recoveryPassword
);
export { authRouter };
