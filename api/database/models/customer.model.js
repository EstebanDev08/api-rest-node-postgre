import { Model, DataTypes } from "sequelize";
import { CUSTOMERS } from "../routes.types.js";
import { USER_TABLE } from "./user.model.js";
import {
  CUSTOMER_FAVORITES_ASSOCIATION,
  CUSTOMER_ORDER_ASSOCIACTION,
  CUSTOMER_USER_ASSOCIACTION,
} from "../association/custumer.association.js";

const CUSTOMER_TABLE = CUSTOMERS;
const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: true,
    type: DataTypes.STRING,
  },

  userId: {
    field: "user_id",
    unique: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    inDelete: "SET NULL",
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

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.users, { as: CUSTOMER_USER_ASSOCIACTION });

    this.hasMany(models.orders, {
      as: CUSTOMER_ORDER_ASSOCIACTION,
      foreignKey: "customerId",
    });

    this.hasOne(models.favorites, {
      foreignKey: "customerId",
      as: CUSTOMER_FAVORITES_ASSOCIATION,
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: CUSTOMERS,
      timestamp: false,
    };
  }
}

export { CUSTOMER_TABLE, CustomerSchema, Customer };
