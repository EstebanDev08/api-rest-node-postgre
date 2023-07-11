"use strict";

/** @type {import('sequelize').Sequelize} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { Product, PRODUCT_TABLE } = await import(
      "../models/product.model.js"
    );
    await queryInterface.createTable(PRODUCT_TABLE, Product.schema);
    // Resto del código de la migración
  },

  async down(queryInterface, Sequelize) {
    const { Product } = await import("../models/product.model.js");
    await queryInterface.dropTable(PRODUCT_TABLE);
    // Resto del código de la migración
  },
};
