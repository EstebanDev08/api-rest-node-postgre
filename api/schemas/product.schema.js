import Joi from "joi";

const id = Joi.number().integer().min(1);
const title = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(1);
const description = Joi.string();
const category = Joi.string();
const image = Joi.string();
const count = Joi.number().integer();

const createProductSchema = Joi.object({
  title: title.required(),
  price: price.required(),
  description: description.required(),
  category: category.required(),
  image: image.required(),
  count: count,
});

const updateProductSchema = Joi.object({
  title: title,
  price: price,
  description: description,
  category: category,
  image: image,
  count: count,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export { createProductSchema, updateProductSchema, getProductSchema };
