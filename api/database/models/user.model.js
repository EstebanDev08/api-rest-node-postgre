import { Model, DataTypes } from "sequelize";
import { USERS } from "../routes.types.js";
import { USER_CUSTOMER_ASSOCIATION } from "../association/user.association.js";

const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
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
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.customers, {
      as: USER_CUSTOMER_ASSOCIATION,
      foreignKey: "userId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: USERS,
      timestamp: false,
    };
  }
}

export { USER_TABLE, UserSchema, User };
