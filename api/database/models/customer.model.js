import { Model, DataTypes } from "sequelize";
import { CUSTOMERS } from "../routes.types.js";
import { USER_TABLE } from "./user.model.js";

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
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
  },

  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
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
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.users, { as: "user" });
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
