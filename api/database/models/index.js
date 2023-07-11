import { Customer, CustomerSchema } from "./customer.model.js";
import { Product, ProductSchema } from "./product.model.js";
import { User, UserSchema } from "./user.model.js";

const setupModels = (sequelize) => {
  Product.init(ProductSchema, Product.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
};

export { setupModels };
