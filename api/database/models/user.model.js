import { Model, DataTypes } from "sequelize";
import { USERS } from "../routes.types.js";
import { USER_CUSTOMER_ASSOCIATION } from "../association/user.association.js";
import { encryptData } from "../../../utils/encryp_data.js";

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
      hooks: {
        //antesd de guardar la informacion
        beforeCreate: async (user, options) => {
          //encriptamos los datos de user.pasword
          const encriptedPassword = await encryptData(user.password);
          //y decimos que ese password sea el password encriptado
          user.password = encriptedPassword;
        },
      },
    };
  }
}

export { USER_TABLE, UserSchema, User };
