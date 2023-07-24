import { Sequelize } from "sequelize";

import { config } from "../config/config.js";
import { setupModels } from "../database/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelizeConection = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

try {
  await sequelizeConection.authenticate();
  console.log("Connection to the database has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

setupModels(sequelizeConection);

export { sequelizeConection };
