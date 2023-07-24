import { Sequelize } from "sequelize";
import pge from "pg";
import { config } from "../config/config.js";
import { setupModels } from "../database/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const { pg } = pge;
const sequelizeConection = new Sequelize(URI, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  dialectModule: pg,
});

try {
  await sequelizeConection.authenticate();
  console.log("Connection to the database has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

setupModels(sequelizeConection);

export { sequelizeConection };
