"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { favoriteProductSchema, FAVORITE_PRODUCT_TABLE } = await import(
      "../models/favorite_product.model.js"
    );
    await queryInterface.createTable(
      FAVORITE_PRODUCT_TABLE,
      favoriteProductSchema
    );
    // Resto del código de la migración
  },

  async down(queryInterface, Sequelize) {
    const { FAVORITE_PRODUCT_TABLE } = await import(
      "../models/favorite_product.model.js"
    );
    await queryInterface.dropTable(FAVORITE_PRODUCT_TABLE);
    // Resto del código de la migración
  },
};
