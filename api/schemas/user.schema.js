import Joi from "joi";

const id = Joi.number().integer().min(1);
const email = Joi.string().email();
const password = Joi.string();

const name = Joi.string().min(1).max(20);
const lastName = Joi.string().min(1);
const phone = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  customer: Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone,
  }).required(),
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  customer: Joi.object({
    name: name,
    lastName: lastName,
    phone: phone,
  }).required,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

export { createUserSchema, updateUserSchema, getUserSchema };
