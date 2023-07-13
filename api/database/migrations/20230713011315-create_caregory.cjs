"use strict";

/** @type {import('sequelize').Sequelize} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { CategorySchema, CATEGORY_TABLE } = await import(
      "../models/category.model.js"
    );
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    // Resto del código de la migración

    const { ProductSchema, PRODUCT_TABLE } = await import(
      "../models/product.model.js"
    );
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    // Resto del código de la migración
  },

  async down(queryInterface, Sequelize) {
    const { PRODUCT_TABLE } = await import("../models/product.model.js");
    await queryInterface.dropTable(PRODUCT_TABLE);
    // Resto del código de la migración

    const { CATEGORY_TABLE } = await import("../models/category.model.js");
    await queryInterface.dropTable(CATEGORY_TABLE);
    // Resto del código de la migración
  },
};
