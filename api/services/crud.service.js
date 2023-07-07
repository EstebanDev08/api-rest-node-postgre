import { sequelizeConection } from "../libs/sequelize.js";
import { Boom } from "@hapi/boom";

class CrudService {
  constructor() {
    this.data = [];
    this.sequelizeConection = sequelizeConection;
    this.models = sequelizeConection.models;
    this.boom = Boom;
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
      const data = await this.models[this.type].findByPk(id);

      if (!data) {
        this.boom.notFound(`${this.type} not found`);
      }

      console.log(typeof id);
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

  delete(id) {
    try {
      const existId = this.data.findIndex((item) => item.id === id);
      if (existId === -1) {
        throw new Error(`No se encontró el ID '${id}'.`);
      } else {
        const updateProduct = this.data.filter((item) => item.id !== id);
        this.data = [...updateProduct];
        return true;
      }
    } catch (error) {
      return error;
    }
  }

  update(id, props) {
    try {
      const existId = this.data.findIndex((item) => item.id === id);
      if (existId === -1) {
        throw new Error(`No se encontró el ID '${id}'.`);
      } else {
        const product = this.data.find((item) => item.id === id);
        const updateProduct = { ...product, ...props };
        this.data[existId] = updateProduct;

        return [true, updateProduct];
      }
    } catch (error) {
      return [error];
    }
  }
}

export { CrudService };
