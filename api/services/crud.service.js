import { sequelizeConection } from "../libs/sequelize.js";
import { ValidationError } from "sequelize";

class CrudService {
  constructor() {
    this.sequelizeConection = sequelizeConection;
    this.models = sequelizeConection.models;
  }

  async find() {
    try {
      const data = await this.models[this.type].findAll();
      if (data.length === 0) {
        return { message: "no have data" };
      }
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
      if (error instanceof ValidationError) {
        return {
          error: {
            statusCode: 409,
            message: error.name,
            errors: error?.errors[0]?.message || error?.errors,
          },
        };
      }

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
