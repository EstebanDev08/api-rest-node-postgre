import Joi from "joi";

const id = Joi.number().integer().min(1);
const customerId = Joi.number().integer().min(1);
const productId = Joi.number().integer().min(1);
const amount = Joi.number().integer().min(1);

const addProductToCartSchema = Joi.object({
  customerId: customerId.required(),
  productId: productId.required(),
  amount: amount,
});

const incrementProductCartSchema = Joi.object({
  customerId: customerId.required(),
  productId: productId.required(),
  amount: amount,
});

const updateFavoriteSchema = Joi.object({
  amount: amount,
});

const getCartSchema = Joi.object({
  id: id.required(),
});

export { addProductToCartSchema, getCartSchema, incrementProductCartSchema };
