import { Model, DataTypes } from "sequelize";
import { USERS } from "../routes.types.js";

const USER_TABLE = "users";
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
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
  static associate() {
    //
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
