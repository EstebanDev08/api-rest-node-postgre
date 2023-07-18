import { Model, DataTypes } from "sequelize";
import { FAVORITE_PRODUCT } from "../routes.types.js";
import { PRODUCT_TABLE } from "./product.model.js";
import { FAVORITE_TABLE } from "./favorite.model.js";

const FAVORITE_PRODUCT_TABLE = FAVORITE_PRODUCT;

const favoriteProductSchema = {
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
      model: FAVORITE_TABLE,
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
};

class FavoriteProduct extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: FAVORITE_PRODUCT_TABLE,
      modelName: FAVORITE_PRODUCT,
      timestamps: false,
    };
  }
}

export { FAVORITE_PRODUCT_TABLE, favoriteProductSchema, FavoriteProduct };
