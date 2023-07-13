import { Model, DataTypes } from "sequelize";
import { CATEGORY } from "../routes.types.js";
import { CATEGORY_PRODUCT_ASSOCIACTION } from "../association/category.association.js";

const CATEGORY_TABLE = CATEGORY;
const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
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
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.products, {
      as: CATEGORY_PRODUCT_ASSOCIACTION,
      foreignKey: "categoryId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: CATEGORY,
      timestamp: false,
    };
  }
}

export { CATEGORY_TABLE, CategorySchema, Category };
