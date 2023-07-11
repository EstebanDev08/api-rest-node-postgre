import { sequelizeConection } from "../libs/sequelize.js";

class CrudService {
  constructor() {
    this.sequelizeConection = sequelizeConection;
    this.models = sequelizeConection.models;
  }

  async find() {
    try {
      const data = await this.models[this.type].findAll();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id));

      if (!data) {
        throw new Error(`${this.type} not found`);
      }
      return { data: data };
    } catch (error) {
      return { error: error };
    }
  }

  async create(item) {
    try {
      const data = await this.models[this.type].create(item);

      return { data: data };
    } catch (error) {
      console.log(
        error,
        "-----------------------------------------------------------------------------------------"
      );

      return { error: error };
    }
  }

  async delete(id) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id));

      if (!data) {
        throw new Error(`${this.type} not found`);
      }

      data.destroy();

      return { isDelete: true };
    } catch (error) {
      return { error: error };
    }
  }

  async update(id, props) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id));

      if (!data) {
        throw new Error(`${this.type} not found`);
      }

      const newData = await data.update(props);

      return { data: newData };
    } catch (error) {
      return { error: error };
    }
  }
}

export { CrudService };
