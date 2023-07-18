"use strict";

/** @type {import('sequelize').Sequelize} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { favoriteSchema, FAVORITE_TABLE } = await import(
      "../models/favorite.model.js"
    );
    await queryInterface.createTable(FAVORITE_TABLE, favoriteSchema);
    // Resto del código de la migración

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

    const { FAVORITE_TABLE } = await import("../models/favorite.model.js");
    await queryInterface.dropTable(FAVORITE_TABLE);
    // Resto del código de la migración
  },
};
