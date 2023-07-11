import Joi from "joi";

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(20);
const lastName = Joi.string().min(1);
const phone = Joi.string();
const userId = Joi.number().integer().min(0);

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone,
  userId: userId.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

export { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
