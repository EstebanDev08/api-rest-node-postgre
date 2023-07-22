import Joi from "joi";

const id = Joi.number().integer().min(1);
const title = Joi.string().min(3).max(20);
const price = Joi.number().min(1);
const description = Joi.string();
const image = Joi.string();
const count = Joi.number().integer();
const rating = Joi.number();
const categoryId = Joi.number().integer().min(1);

const createProductSchema = Joi.object({
  title: title.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  count: count,
  rating: rating,
  categoryId: categoryId.required(),
});

const getPaginationSchema = Joi.object({
  limit: Joi.number().integer().min(0),
  offset: Joi.number().integer().min(0),
});

const updateProductSchema = Joi.object({
  title: title,
  price: price,
  description: description,
  image: image,
  count: count,
  rating: rating,
  categoryId: categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  getPaginationSchema,
};
