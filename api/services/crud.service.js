import { faker } from "@faker-js/faker";
import { getPoolConection } from "../libs/postgres.pool.js";

class CrudService {
  constructor() {
    this.data = [];
    this.getPoolConection = getPoolConection;
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
    const res = await this.getPoolConection.query(query);
    console.log(res.rows);
    return res.rows;
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
