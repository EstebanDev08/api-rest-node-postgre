import Joi from "joi";

const id = Joi.number().integer().min(1);
const email = Joi.string().email();
const password = Joi.string();

const loginSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const recoveryPassSchema = Joi.object({
  email: email.required(),
});

export { loginSchema, recoveryPassSchema };
