import { sequelizeConection } from "../libs/sequelize.js";

class CrudService {
  constructor() {
    this.sequelizeConection = sequelizeConection;
    this.models = sequelizeConection.models;
  }
}

export { CrudService };
