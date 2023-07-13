import { Category, CategorySchema } from "./category.model.js";
import { Customer, CustomerSchema } from "./customer.model.js";
import { Order, orderSchema } from "./order.model.js";
import { Product, ProductSchema } from "./product.model.js";
import { User, UserSchema } from "./user.model.js";

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(orderSchema, Order.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
};

export { setupModels };
