import Joi from "joi";

const email = Joi.string().email();
const token = Joi.string();
const password = Joi.string();

const loginSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});
const newPasswordSchema = Joi.object({
  token: token.required(),
  newPassword: password.required(),
});
const recoveryPassSchema = Joi.object({
  email: email.required(),
});

export { loginSchema, recoveryPassSchema, newPasswordSchema };
