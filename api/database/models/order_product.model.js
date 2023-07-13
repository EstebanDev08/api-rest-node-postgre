import { Model, DataTypes } from "sequelize";
import { ORDERS, ORDER_PRODUCT } from "../routes.types.js";
import { ORDER_CUSTOMER_ASSOCIACTION } from "../association/order.association.js";
import { ORDER_TABLE } from "./order.model.js";
import { PRODUCT_TABLE } from "./product.model.js";

const ORDER_PRODUCT_TABLE = ORDER_PRODUCT;

const orderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderId: {
    field: "order_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  productId: {
    field: "product_id",
    allowNull: false,
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
    type: DataTypes.INTEGER,
  },
};

class OrderProduct extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: ORDER_PRODUCT,
      timestamps: false,
    };
  }
}

export { ORDER_PRODUCT_TABLE, orderProductSchema, OrderProduct };
