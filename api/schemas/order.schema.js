import Joi from "joi";

const id = Joi.number().integer().min(1);
const status = Joi.string();
const customerId = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

const updateOrderSchema = Joi.object({
  status: status,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

export { createOrderSchema, updateOrderSchema, getOrderSchema };
