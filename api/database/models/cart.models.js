import { Model, DataTypes } from "sequelize";
import { CART, CART_PRODUCT } from "../routes.types.js";

const CART_TABLE = CART;

const cartSchema = {
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

class Cart extends Model {
  static associate(models) {
    this.belongsTo(models.customers);

    this.belongsToMany(models.products, {
      as: "products",
      through: CART_PRODUCT,
      foreignKey: "customerId",
      otherKey: "productId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CART_TABLE,
      modelName: CART,
      timestamps: false,
    };
  }
}

export { CART_TABLE, cartSchema, Cart };
