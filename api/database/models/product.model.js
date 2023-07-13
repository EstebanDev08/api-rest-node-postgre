import { Model, DataTypes } from "sequelize";
import { PRODUCTS } from "../routes.types.js";
import { CATEGORY_TABLE } from "./category.model.js";
import { CATEGORY_PRODUCT_ASSOCIACTION } from "../association/category.association.js";

const PRODUCT_TABLE = PRODUCTS;
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
  },

  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  categoryId: {
    field: "category_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: "id",
    },
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  rating: {
    allowNull: false,
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  quantityRemaining: {
    field: "quantity_remaining",
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
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

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.category, { as: CATEGORY_PRODUCT_ASSOCIACTION });
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
