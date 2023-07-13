import { Model, DataTypes } from "sequelize";
import { ORDERS, ORDER_PRODUCT } from "../routes.types.js";
import { CUSTOMER_TABLE } from "./customer.model.js";
import { ORDER_CUSTOMER_ASSOCIACTION } from "../association/order.association.js";

const ORDER_TABLE = ORDERS;

const orderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
  customerId: {
    field: "customer_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },

  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
  },

  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.customers, {
      as: ORDER_CUSTOMER_ASSOCIACTION,
    });

    this.belongsToMany(models.products, {
      as: "products",
      through: ORDER_PRODUCT,
      foreignKey: "orderId",
      otherKey: "productId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: ORDERS,
      timestamp: false,
    };
  }
}

export { ORDER_TABLE, orderSchema, Order };
