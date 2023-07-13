"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { orderProductSchema, ORDER_PRODUCT_TABLE } = await import(
      "../models/order_product.model.js"
    );
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, orderProductSchema);
    // Resto del código de la migración
  },

  async down(queryInterface, Sequelize) {
    const { ORDER_PRODUCT_TABLE } = await import(
      "../models/order_product.model.js"
    );
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    // Resto del código de la migración
  },
};
