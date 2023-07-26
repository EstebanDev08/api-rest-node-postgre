import { CrudService } from "./crud.service.js";
import { CUSTOMERS } from "../database/routes.types.js";
import {
  CUSTOMER_CART_ASSOCIATION,
  CUSTOMER_FAVORITES_ASSOCIATION,
  CUSTOMER_ORDER_ASSOCIACTION,
  CUSTOMER_USER_ASSOCIACTION,
} from "../database/association/custumer.association.js";
import { ValidationError } from "sequelize";

class CustomerService extends CrudService {
  constructor() {
    super();

    this.type = CUSTOMERS;
    this.association = [
      CUSTOMER_USER_ASSOCIACTION,
      CUSTOMER_ORDER_ASSOCIACTION,
      CUSTOMER_FAVORITES_ASSOCIATION,
      CUSTOMER_CART_ASSOCIATION,
    ];
  }

  async findOne(id) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id), {
        include: [
          {
            association: this.association[0],
            attributes: { exclude: ["updatedAt", "createdAt", "password"] },
          },
          {
            association: this.association[1],
          },
          {
            association: this.association[2],
            include: ["products"],
          },
          {
            association: this.association[3],
            include: ["products"],
          },
        ],
      });

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
      const data = await this.models[this.type].create(item, {
        include: this.association,
      });

      await this.models.favorites.create({ customerId: data.id });
      await this.models.cart.create({ customerId: data.id });

      //borramos campos inecesarios
      delete data.dataValues.user.dataValues.password;
      delete data.dataValues.user.dataValues.updatedAt;
      delete data.dataValues.user.dataValues.createdAt;

      return { data: data };
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(error);
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
}

export { CustomerService };
