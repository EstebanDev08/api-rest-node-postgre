import { Model, DataTypes, Sequelize } from "sequelize";

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
  },

  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  count: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  creationAt: {
    allowNull: false,
    field: "create_at",
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
  },
  updateAt: {
    allowNull: false,
    field: "update_at",
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
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
      modelName: "products",
      timestamp: false,
    };
  }
}

export { PRODUCT_TABLE, ProductSchema, Product };
