import Joi from "joi";

const id = Joi.number().integer().min(1);
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(1);
const description = Joi.string();
const category = Joi.string();
const image = Joi.string();
const count = Joi.number().integer();

const createProductSchema = Joi.object({
  title: name.required(),
  price: price.required(),
  description: description.required(),
  category: category.required(),
  image: image.required(),
  count: count,
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export { createProductSchema, updateProductSchema, getProductSchema };
