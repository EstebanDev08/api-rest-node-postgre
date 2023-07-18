import Joi from "joi";

const id = Joi.number().integer().min(1);
const customerId = Joi.number().integer().min(1);
const productId = Joi.number().integer().min(1);

const createFavoriteSchema = Joi.object({
  customerId: customerId.required(),
  productId: productId.required(),
});

const updateFavoriteSchema = Joi.object({});

const getFavoriteSchema = Joi.object({
  id: id.required(),
});

export { createFavoriteSchema, updateFavoriteSchema, getFavoriteSchema };
