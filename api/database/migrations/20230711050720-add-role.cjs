"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { PRODUCT_TABLE, ProductSchema } = await import(
      "../models/product.model.js"
    );

    await queryInterface.addColumn(
      PRODUCT_TABLE,
      "rating",
      ProductSchema.rating
    );

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    const { PRODUCT_TABLE } = await import("../models/product.model.js");

    await queryInterface.removeColumn(PRODUCT_TABLE, "rating");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
