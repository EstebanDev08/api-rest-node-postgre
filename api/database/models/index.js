import { Product, ProductSchema } from "./product.model.js";
import { User, UserSchema } from "./user.model.js";

const setupModels = (sequelize) => {
  Product.init(ProductSchema, Product.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
};

export { setupModels };
