import { Product, ProductSchema } from "./product.model.js";

const setupModels = (sequelize) => {
  Product.init(ProductSchema, Product.config(sequelize));
};

export { setupModels };
