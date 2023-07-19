import { Model, DataTypes } from "sequelize";
import { CART_PRODUCT } from "../routes.types.js";
import { PRODUCT_TABLE } from "./product.model.js";
import { CART_TABLE } from "./cart.models.js";

const CART_PRODUCT_TABLE = CART_PRODUCT;

const cartProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: "customer_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CART_TABLE,
      key: "customer_id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  productId: {
    field: "product_id",
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  amount: {
    allowNull: false,
    defaultValue: 1,
    type: DataTypes.INTEGER,
  },
};

class CartProduct extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: CART_PRODUCT_TABLE,
      modelName: CART_PRODUCT,
      timestamps: false,
    };
  }
}

export { CART_PRODUCT_TABLE, cartProductSchema, CartProduct };
