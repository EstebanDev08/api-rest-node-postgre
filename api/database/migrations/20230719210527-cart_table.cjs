"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { cartSchema, CART_TABLE } = await import("../models/cart.models.js");

    await queryInterface.createTable(CART_TABLE, cartSchema);

    const { CART_PRODUCT_TABLE, cartProductSchema } = await import(
      "../models/cart_product.model.js"
    );
    await queryInterface.createTable(CART_PRODUCT_TABLE, cartProductSchema);

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    const { CART_PRODUCT_TABLE } = await import(
      "../models/cart_product.model.js"
    );

    await queryInterface.dropTable(CART_PRODUCT_TABLE);

    const { CART_TABLE } = await import("../models/cart.models.js");

    await queryInterface.dropTable(CART_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
