import { Sequelize } from "sequelize";

import { config } from "../config/config.js";
import { setupModels } from "../database/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelizeConection = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
});

try {
  await sequelizeConection.authenticate();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

setupModels(sequelizeConection);

sequelizeConection.sync({ alter: true });

export { sequelizeConection };
