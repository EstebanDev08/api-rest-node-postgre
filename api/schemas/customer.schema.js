import Joi from "joi";
import { updateUserSchema } from "./user.schema.js";

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(20);
const lastName = Joi.string().min(1);
const phone = Joi.string();

const email = Joi.string().email();
const password = Joi.string();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone,
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }).required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  user: updateUserSchema,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

export { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
