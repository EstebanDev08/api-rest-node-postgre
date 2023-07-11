"use strict";

/** @type {import('sequelize').Sequelize} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { CustomerSchema, CUSTOMER_TABLE } = await import(
      "../models/customer.model.js"
    );
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    // Resto del código de la migración
  },

  async down(queryInterface, Sequelize) {
    const { CUSTOMER_TABLE } = await import("../models/customer.model.js");
    await queryInterface.dropTable(CUSTOMER_TABLE);
    // Resto del código de la migración
  },
};
