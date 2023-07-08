import { sequelizeConection } from "../libs/sequelize.js";

class CrudService {
  constructor() {
    this.data = [];
    this.sequelizeConection = sequelizeConection;
    this.models = sequelizeConection.models;
  }

  async find() {
    try {
      const data = await this.models[this.type].findAll();
      return data;
    } catch (error) {
      throw new error(error);
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
      return { error: error?.errors[0] };
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
