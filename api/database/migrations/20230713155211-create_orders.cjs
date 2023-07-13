"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { orderSchema, ORDER_TABLE } = await import(
      "../models/order.model.js"
    );
    await queryInterface.createTable(ORDER_TABLE, orderSchema);
    // Resto del código de la migración
  },

  async down(queryInterface, Sequelize) {
    const { ORDER_TABLE } = await import("../models/order.model.js");
    await queryInterface.dropTable(ORDER_TABLE);
    // Resto del código de la migración
  },
};
