import Joi from "joi";

const id = Joi.number().integer();
const title = Joi.string().min(1).max(20);
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  title: title.required(),
  image: image.required(),
});

const updateCategorySchema = Joi.object({
  title: title,
  image: image,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

export { createCategorySchema, updateCategorySchema, getCategorySchema };
