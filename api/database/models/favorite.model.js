import { Model, DataTypes } from "sequelize";
import { FAVORITES, FAVORITE_PRODUCT } from "../routes.types.js";

const FAVORITE_TABLE = FAVORITES;

const favoriteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  customerId: {
    field: "customer_id",
    unique: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Favorite extends Model {
  static associate(models) {
    this.belongsTo(models.customers);

    this.belongsToMany(models.products, {
      as: "products",
      through: FAVORITE_PRODUCT,
      foreignKey: "customerId",
      otherKey: "productId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FAVORITE_TABLE,
      modelName: FAVORITES,
      timestamps: false,
    };
  }
}

export { FAVORITE_TABLE, favoriteSchema, Favorite };
