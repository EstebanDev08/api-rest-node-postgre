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

setupModels(sequelizeConection);

sequelizeConection.sync({ alter: true });

export { sequelizeConection };
