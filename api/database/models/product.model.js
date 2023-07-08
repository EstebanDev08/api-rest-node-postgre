import { Model, DataTypes, Sequelize } from "sequelize";
import { PRODUCTS } from "../routes.types.js";

const PRODUCT_TABLE = "products";
const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT,
    unique: true,
  },

  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  count: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
};

class Product extends Model {
  static associate() {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: PRODUCTS,
      timestamp: false,
    };
  }
}

export { PRODUCT_TABLE, ProductSchema, Product };
