import { CrudService } from "./crud.service.js";
import { CUSTOMERS } from "../database/routes.types.js";
import {
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
    ];
  }

  async findOne(id) {
    try {
      const data = await this.models[this.type].findByPk(parseInt(id), {
        include: [
          {
            association: this.association[0],
            attributes: { exclude: ["updatedAt", "createdAt"] },
          },
          {
            association: this.association[1],
          },
          {
            association: this.association[2],
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

      console.log(data);

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
