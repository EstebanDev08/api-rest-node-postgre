"use strict";

/** @type {import('sequelize').Sequelize} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { UserSchema, USER_TABLE } = await import("../models/user.model.js");
    await queryInterface.createTable(USER_TABLE, UserSchema);
    // Resto del código de la migración
  },

  async down(queryInterface, Sequelize) {
    const { USER_TABLE } = await import("../models/user.model.js");
    await queryInterface.dropTable(USER_TABLE);
    // Resto del código de la migración
  },
};
