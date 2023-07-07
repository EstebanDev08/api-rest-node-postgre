import { faker } from "@faker-js/faker";
import { sequelizeConection } from "../libs/sequelize.js";

class CrudService {
  constructor() {
    this.data = [];
    this.sequelizeConection = sequelizeConection;
  }

  create(item) {
    try {
      const newItem = {
        id: faker.datatype.uuid(),
        ...item,
      };

      this.data.push(newItem);
      return [true, newItem];
    } catch (error) {
      return [error];
    }
  }

  async find() {
    const query = `SELECT * FROM ${this.type}`;
    const [data] = await this.sequelizeConection.query(query);
    console.log(data);
    return data;
  }

  findOne(id) {
    return this.data.find((item) => item.id === id);
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
