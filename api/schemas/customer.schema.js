import Joi from "joi";
import { createUserSchema, updateUserSchema } from "./user.schema.js";

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(20);
const lastName = Joi.string().min(1);
const phone = Joi.string();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone,
  user: createUserSchema,
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
